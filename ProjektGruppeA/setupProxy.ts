import {createProxyMiddleware} from 'http-proxy-middleware';
//const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Pfad, der zu Ihrer API führt (ändern Sie dies entsprechend Ihrer API)
    createProxyMiddleware({
      target: 'https://localhost:7204', // Ziel-URL Ihrer .NET Web API
      changeOrigin: true,
    })
  );
};
