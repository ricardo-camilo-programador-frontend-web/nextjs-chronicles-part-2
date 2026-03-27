import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
  });

  test("should have sticky header visible on scroll", async ({ page }) => {
    const header = page.locator("header");

    await expect(header).toBeVisible();
    await expect(header).toHaveClass(/sticky/);
  });

  test("should navigate to journey section via anchor link", async ({
    page,
  }) => {
    await page.locator('a[href="#journey"]').first().click();

    await expect(page.locator("#journey")).toBeInViewport({ ratio: 0.1 });
  });

  test("should navigate to work section via anchor link", async ({ page }) => {
    await page.locator('a[href="#work"]').first().click();

    await expect(page.locator("#work")).toBeInViewport({ ratio: 0.1 });
  });

  test("should navigate to testimonials section via anchor link", async ({
    page,
  }) => {
    await page.locator('a[href="#testimonials"]').first().click();

    await expect(page.locator("#testimonials")).toBeInViewport({ ratio: 0.1 });
  });

  test("should navigate to contact section via anchor link", async ({
    page,
  }) => {
    await page.locator('a[href="#contact"]').first().click();

    await expect(page.locator("#contact")).toBeInViewport({ ratio: 0.1 });
  });

  test("should navigate to home when clicking logo", async ({ page }) => {
    await page.locator('a[rel="home"]').click();

    await expect(page).toHaveURL(/\/en$/);
  });
});
