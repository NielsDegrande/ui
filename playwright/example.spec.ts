import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5175/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Template UI/);
});
