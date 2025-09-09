const express = require("express");
const request = require("request");
const app = express();

const BASE_URL = "http://c1.frsports.info/TUESOC4";

app.get("/*", (req, res) => {
  const targetUrl = BASE_URL + req.originalUrl;

  req.pipe(
    request(targetUrl, {
      headers: {
        "Referer": "https://liveboxpro.com/",
        "Origin": "https://liveboxpro.com/",
        "User-Agent": "Mozilla/5.0"
      }
    })
  ).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Proxy running on port " + PORT));
