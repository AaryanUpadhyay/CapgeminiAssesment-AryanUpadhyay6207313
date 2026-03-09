import {test, expect} from '@playwright/test';

test('Task 1', async ({page}) => {
    test.setTimeout(20000);
    await page.goto('https://demoapps.qspiders.com/');
    await page.locator("//div[@class='w-[9rem] h-[2.2rem] flex relative items-center']").first().click();
    await page.getByText("Login Now").click();
    await page.waitForTimeout(5000);
    await page.locator("#email").fill("test@example.com");
    await page.locator("#password").fill("test123");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/login/);
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page).toHaveScreenshot("task1.png");
})