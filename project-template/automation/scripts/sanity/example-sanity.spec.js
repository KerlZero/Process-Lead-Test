import { expect, test } from "@playwright/test";
import { fileExists, htmlPath, siteUrl } from "../helpers/test-utils.js";

test.describe("Sanity example", () => {
  test("main HTML file exists", () => {
    expect(fileExists(htmlPath), `${htmlPath} should exist`).toBe(true);
  });

  test("page opens", async ({ page }) => {
    await page.goto(siteUrl);

    await expect(page.locator("body")).toBeVisible();
  });
});

