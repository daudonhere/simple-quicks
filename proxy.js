const { createProxyMiddleware } = require('http-proxy-middleware');
const { Buffer } = require("buffer");
const { IncomingMessage, ServerResponse } = require("http");
require("dotenv").config();

/**
 * @param {string} _path
 * @param {IncomingMessage} req
 * @return {boolean}
 */
const pathFilter = function (_path, req) {
  if (_path.match("^/platform/settings")) return false;
  return true;
  let ret = true;
  return ret;
};

/**
 * @param {import('http').ClientRequest} proxyReq
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
function onProxyReq(proxyReq, req, res) {
  let clientIp, domain, userAgent, deviceType;
  try {
    clientIp =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.headers["x-real-ip"] ||
      req.connection.remoteAddress;
    domain = req.headers["host"];
    userAgent = req.headers["user-agent"] || "";
    deviceType = /mobile/i.test(userAgent) ? "mobile" : "desktop";
  } catch (err) {}
  proxyReq.setHeader("site-secret-key", process.env.SITE_SECRET_KEY || "");
  proxyReq.setHeader("X-Client-IP", clientIp);
  proxyReq.setHeader("X-User-Agent", userAgent);
  proxyReq.setHeader("X-Domain", domain);
  proxyReq.setHeader("X-Device", deviceType);
}

/**
 * @param {IncomingMessage} proxyRes
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res
 */

function onProxyRes(proxyRes, req, res) {
  try {
    delete proxyRes.headers["x-powered-by"];
  } catch (err) {}
}

/**
 * @param {Error} err 
 * @param {IncomingMessage} req
 * @param {ServerResponse} res 
 */

function onError(err, req, res) {
  console.error("Error in proxy middleware", err);
  res.status(500).send("Proxy error");
}

console.log("HUB_API_URL", process.env.HUB_API_URL);
const options = {
  target: process.env.HUB_API_URL,
  pathFilter: pathFilter,
  changeOrigin: true,
  logLevel: "debug",
  pathRewrite: { "^/": "/v1/" }, 
  on: { proxyReq: onProxyReq, proxyRes: onProxyRes, error: onError },
};

/**
 * @param {string} _path 
 * @param {import("express").Express} server
 */

module.exports = function (_path, server) {
  const apiProxy = createProxyMiddleware(options);
  server.use(_path, apiProxy);
}

function modifyResponse(body) {
  let data = JSON.parse(body);
  data.newField = "newValue";
  return JSON.stringify(data);
}
