const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// this will send the html page if the index page is requested
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// this will return the video streaming is /video endpoint is requested
app.get("/video", function (req, res) {
  // store ranges of headers check if my request check range or not
  // the range is to require the specific part of content
  const range = req.headers.range;
  console.log(req.headers);
  console.log(range);
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  // path of the video relative to the location of your file
  const videoPath = "../../الملاكمة الأولى/الحرف الأول.mp4";

  // this function (statSync) is to get info about the file such as size here
  const videoSize = fs.statSync("../../الملاكمة الأولى/الحرف الأول.mp4").size;

  // this is constant equal 1000000 byte to divide files into multi parts
  const CHUNK_SIZE = 10 ** 6;

  // is to extract numeric values from range and replace any unnumeric values by ""
  const start = Number(range.replace(/\D/g, ""));

  // is to get the end point of the file
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // is to get the content length in size 10 ^ 6 Byte
  const contentLength = end - start + 1;

  // configuration headers to send just specific content in the file
  //   Content-Range': 'bytes chunkStart****chunkEnd/chunkSize' this is a format
  // 'Accept-Ranges': 'bytes'
  // 'Content-Length': chunkSize
  // 'Content-Type': 'video/mp4'
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // this is used for partial content it's a status code

  res.writeHead(206, headers);

  //   create a stream reading from this video
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // after reading stream this wiil send it to the response
  videoStream.pipe(res);
});

app.listen(3000, () => {
  console.log("server is running on port http://localhost:" + 3000);
});
