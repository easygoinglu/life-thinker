const path = require("path");
const express = require("express");
var compression = require("compression");
const app = express();
const port = (process.env.PORT || 8080)

app.use(compression());
app.use(express.static(__dirname ));
app.get("*", function (_, res) { res.sendFile(path.resolve(__dirname + "/index.html")); });
app.listen(port);
