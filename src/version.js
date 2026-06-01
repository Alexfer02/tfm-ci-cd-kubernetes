function resolveVersion() {
  // Se podrá inyectar GIT_SHA en el futuro desde el pipeline.
  return {
    name: "microservicio-devops",
    version: process.env.APP_VERSION || "dev",
    gitSha: process.env.GIT_SHA || "unknown",
  };
}

module.exports = { resolveVersion };
