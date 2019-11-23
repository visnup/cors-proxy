#!/usr/bin/env node
'use strict';
const options = {
  originWhitelist: ['https://visnup.static.observableusercontent.com'],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
};
const cors_proxy = require('cors-anywhere').createServer(options);
module.exports = (req, res) => {
  console.log('headers', req.headers);
  console.log('url', req.url);
  cors_proxy.emit('request', req, res);
};
