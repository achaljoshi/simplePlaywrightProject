import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to ASX Online homepage', async ({ page }) => {
    const mainHeading = page.locator('h1:has-text("Welcome to ASX Online")');
    await expect(mainHeading).toBeVisible();
    await page.waitForLoadState('networkidle');
    await page.getByRole('link', { name: 'Sign-in' }).click();
    await page.getByRole('link', { name: 'Participant Participant' }).click();
    await expect(page.locator('label').filter({ hasText: /^Email address$/ })).toBeVisible();
  });

});
