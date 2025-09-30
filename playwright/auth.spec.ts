/* eslint-disable */
import { test, expect } from "@playwright/test";

test("login and check elements", async ({ page }) => {
  await page.goto("http://localhost:5175/");

  // Fill out the login form.
  await page.fill('input[name="username"]', "your-username");
  await page.fill('input[name="password"]', "your-password");

  // Submit the login form.
  await page.click('button[type="submit"]');

  // Check elements on the welcome page.
  await expect(
    page.getByRole("heading", { name: "Welcome to", level: 2 }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Template", level: 1 }),
  ).toBeVisible();

  // Check elements on the sidebar.
  await expect(page.locator("text=home")).toBeVisible();
  await expect(page.locator("text=products")).toBeVisible();
  await expect(page.locator("text=log out")).toBeVisible();
});
