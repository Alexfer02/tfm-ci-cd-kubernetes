const request = require("supertest");
const { createApp } = require("../src/app");

describe("API", () => {
  test("GET /health", async () => {
    const app = createApp();
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  test("GET /version", async () => {
    const app = createApp();
    process.env.APP_VERSION = "dev";
    process.env.GIT_SHA = "unknown";
    const res = await request(app).get("/version");
    expect(res.status).toBe(200);
    expect(res.body.name).toBe("microservicio-devops");
  });
});
