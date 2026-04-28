import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./scripts",
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    trace: "retain-on-failure"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "mobile-chromium",
      use: { ...devices["Pixel 5"] }
    }
  ]
});

