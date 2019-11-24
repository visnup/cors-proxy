#!/usr/bin/env node
const cors_proxy = require("cors-anywhere").createServer({
  originWhitelist: JSON.parse(process.env["cors-origins"]),
  requireHeader: ["origin", "x-requested-with"],
  removeHeaders: ["cookie"]
});
module.exports = (req, res) => {
  console.log(req.url);
  cors_proxy.emit("request", req, res);
};
