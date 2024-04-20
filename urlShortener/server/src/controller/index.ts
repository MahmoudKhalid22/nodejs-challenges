import { Request, Response } from "express";
import shortUrl from "../model/shortUrl.model";

const healthcheck = async (req: Request, res: Response) => {
  return res.send("App is healthy");
};

const createShortUrl = async (req: Request, res: Response) => {
  try {
    const { destination } = req.body;

    // save in database
    const newUrl = await shortUrl.create({ destination });

    // return the short url
    res.send(newUrl);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const handleRedirect = async (req: Request, res: Response) => {
  try {
    const { shortId } = req.params;
    const url = await shortUrl.findOne({ shortId }).lean();
    if (!url) {
      return res.status(404).send("url is not found");
    }
    if (url) {
      return res.redirect(url.destination);
    } else {
      return res.status(500).send("Invalid URL");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export { healthcheck, createShortUrl, handleRedirect };
