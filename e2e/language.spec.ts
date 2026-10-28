import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => { localStorage.setItem("intro-warning-modal", "true"); });
});

test.describe("Language Switching", () => {
  test("should load in English by default", async ({ page }) => {
    await page.goto("/en");

    await expect(page.getByRole("heading", { name: "RICARDO CAMILO" })).toBeVisible();
  });

  test("should switch from English to Portuguese", async ({ page }) => {
    await page.goto("/en");

    await page.locator('button[aria-haspopup="true"]').click();
    await page.locator('button[role="menuitem"]', { hasText: "PT-BR" }).click();

    await expect(page).toHaveURL(/\/pt-BR/);
  });

  test("should switch from Portuguese to English", async ({ page }) => {
    await page.goto("/pt-BR");

    await page.locator('button[aria-haspopup="true"]').click();
    await page.locator('button[role="menuitem"]', { hasText: "EN" }).click();

    await expect(page).toHaveURL(/\/en/);
  });

  test("should display Portuguese content on pt-BR locale", async ({
    page,
  }) => {
    await page.goto("/pt-BR");

    await expect(page.getByRole("heading", { name: "RICARDO CAMILO" })).toBeVisible();
    await expect(page.getByText("Desenvolvedor Frontend", { exact: true })).toBeVisible();
  });

  test("should close language dropdown when clicking outside", async ({
    page,
  }) => {
    await page.goto("/en");

    await page.locator('button[aria-haspopup="true"]').click();
    const menu = page.locator('[role="menu"]');
    await expect(menu).toBeVisible();

    await page.locator("h1").click();
    await expect(menu).not.toBeVisible();
  });
});
