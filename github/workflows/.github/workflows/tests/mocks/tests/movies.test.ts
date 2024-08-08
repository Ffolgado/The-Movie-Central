import { test, expect } from '@playwright/test';
import './mocks/setupMocks'; // Importa el setup de mocks

test.describe('Movie Central Tests', () => {

  test('All movie images in the grid load correctly', async ({ page }) => {
    await page.goto('/');
    const images = await page.$$eval('.movie-grid img', imgs => imgs.map(img => img.complete));
    expect(images.every(img => img)).toBe(true);
  });

  test('Verify filtering pills functionality', async ({ page }) => {
    await page.goto('/');
    await page.click('.filter-pill[data-filter="action"]');
    const movies = await page.$$('.movie-item');
    expect(movies.length).toBeGreaterThan(0);
  });

  test('Homepage style changes (using screenshots)', async ({ page }) => {
    await page.goto('/');
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');
  });

  test('Verify that navigation bar links redirect to the correct page', async ({ page }) => {
    await page.goto('/');
    const links = await page.$$('.navbar a');
    for (const link of links) {
      const href = await link.getAttribute('href');
      await link.click();
      await expect(page).toHaveURL(new RegExp(href));
      await expect(page).toHaveTitle(new RegExp(href.replace('/', '')));
      await page.goBack();
    }
  });

  test('Verify the search functionality', async ({ page }) => {
    await page.goto('/');
    await page.fill('input[name="search"]', 'Inception');
    await page.press('input[name="search"]', 'Enter');
    const result = await page.$('.movie-item');
    expect(result).not.toBeNull();
  });
});
