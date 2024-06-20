import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Template UI/);

  // Fill out the login form
  await page.fill('input[name="username"]', "your-username");
  await page.fill('input[name="password"]', "your-password");

  // Submit the login form
  await page.click('button[type="submit"]');

  // Check elements on the welcome page
  await expect(page.locator("h4")).toContainText("Welcome to");
  await expect(page.locator("h3")).toContainText("Template");

  // Check elements on the sidebar
  await expect(page.locator("text=home")).toBeVisible();
  await expect(page.locator("text=products")).toBeVisible();
  await expect(page.locator("text=log out")).toBeVisible();
});
