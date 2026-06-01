const express = require("express");
const { resolveVersion } = require("./version");

function createApp() {
  const app = express();

  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.get("/", (_req, res) => {
    res.status(200).json({ message: "Hola desde el microservicio post CI" });
  });

  app.get("/version", (_req, res) => {
    res.status(200).json(resolveVersion());
  });

  return app;
}

module.exports = { createApp };
