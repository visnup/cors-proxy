#!/usr/bin/env node
const options = {
  originWhitelist: ["https://visnup.static.observableusercontent.com"],
  requireHeader: ["origin", "x-requested-with"],
  removeHeaders: ["cookie"]
};
const cors_proxy = require("cors-anywhere").createServer(options);
module.exports = (req, res) => {
  console.log(req.url);
  cors_proxy.emit("request", req, res);
};
