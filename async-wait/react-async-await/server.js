var express = require("express");
var cors = require("cors");
var app = express();
var request = require("request");

app.use(cors({ origin: "*" }));

app.get("/data", (req, res) => {
    var url =
        "https://api.jikan.moe/v3/anime/1735/";

    request.get(url, function (error, jikanHttpResponse, jikanHttpBody) {
        res.setHeader("Content-Type", "application/json");
        res.send(jikanHttpBody);
    });
});

app.get("/data/episodes", (req, res) => {
    var url =
        "https://api.jikan.moe/v3/anime/1735/episodes/";

    request.get(url, function (error, jikanHttpResponse, jikanHttpBody) {
        res.setHeader("Content-Type", "application/json");
        res.send(jikanHttpBody);
    });
});

app.listen(5000, () => console.log("server has started"));