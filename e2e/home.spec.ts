import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load the home page with hero section", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("section")).toBeVisible();
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("should display the developer name in the hero", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("text=RICARDO CAMILO")).toBeVisible();
  });

  test("should redirect to default locale when accessing root", async ({
    page,
  }) => {
    await page.goto("/");

    await page.waitForURL("**/en**");
  });

  test("should have correct page title", async ({ page }) => {
    await page.goto("/en");

    await expect(page).toHaveTitle(/RICARDO CAMILO/i);
  });

  test("should render all main sections", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("#journey")).toBeVisible();
    await expect(page.locator("#work")).toBeVisible();
    await expect(page.locator("#testimonials")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });
});
