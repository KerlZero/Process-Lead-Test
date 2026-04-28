import { expect, test } from "@playwright/test";
import { siteUrl } from "../helpers/test-utils.js";

test.describe("E2E example", () => {
  test("page loads for a main user journey", async ({ page }) => {
    await page.goto(siteUrl);

    await expect(page.locator("body")).toBeVisible();
  });
});

