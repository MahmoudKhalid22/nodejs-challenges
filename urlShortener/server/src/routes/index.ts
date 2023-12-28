import { Router } from "express";

const router = Router();

import {
  healthcheck,
  createShortUrl,
  handleRedirect,
} from "../controller/index";

router.get("/healthcheck", healthcheck);
router.post("/url", createShortUrl);
router.get("/:shortId", handleRedirect);

export { router };
