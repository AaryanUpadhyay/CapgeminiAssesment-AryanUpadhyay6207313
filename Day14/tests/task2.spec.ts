import { test, expect } from '@playwright/test';

test('Flipkart', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');
  await page.waitForTimeout(3000);
  const closeBtn = page.getByRole('button', { name: '✕' });
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
  const searchBox = page.locator('//input[@name="q"]').first();
  await expect(searchBox).toBeEditable();

  await searchBox.fill('shoes');
  await searchBox.press('Enter');
  await page.waitForTimeout(4000);
  await expect(page).toHaveURL(/search/);
  const womenShoes = page.locator('//a[contains(translate(text(),"WOMEN","women"),"women")]');

  await expect(womenShoes).toHaveCount(await womenShoes.count());

  const textValue = await womenShoes.first().innerText();
  await expect(textValue.toLowerCase().includes('women')).toBeTruthy();

  await expect(page).toHaveTitle(/Flipkart/i);

  await expect(page).toHaveScreenshot('task2.png');

});