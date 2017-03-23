const path = require("path");
const express = require("express");
const app = express();
const port = (process.env.PORT || 8080)
const indexPath = path.join(__dirname, "index.html");
// const publicPath = express.static(path.join(__dirname, "public"))

// app.use("/public", publicPath)
app.use(express.static(__dirname ));
app.get("/", function (_, res) { res.sendFile(indexPath) });
app.listen(port);
