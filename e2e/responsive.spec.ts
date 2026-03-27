import { test, expect } from "@playwright/test";

test.describe("Responsive Design", () => {
  test("should render correctly on mobile viewport", async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
    });
    const page = await context.newPage();

    await page.goto("/en");

    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    await context.close();
  });

  test("should render correctly on tablet viewport", async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 768, height: 1024 },
    });
    const page = await context.newPage();

    await page.goto("/en");

    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("#journey")).toBeVisible();

    await context.close();
  });

  test("should render correctly on desktop viewport", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator("#journey")).toBeVisible();
    await expect(page.locator("#work")).toBeVisible();
  });
});
