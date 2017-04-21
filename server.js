const path = require("path");
const express = require("express");
var compression = require("compression");
const app = express();
const port = (process.env.PORT || 8080)
const indexPath = path.join(__dirname, "index.html");

app.use(compression());
app.use(express.static(__dirname ));
app.get("/", function (_, res) { res.sendFile(indexPath) });
app.listen(port);
