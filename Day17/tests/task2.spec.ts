import { test, expect } from "@playwright/test"

test("Restraunt on JustDial", async ({ browser }) => {
    const context = await browser.newContext({ permissions: ["notifications"] })
    const page = await context.newPage()
    await page.goto("https://www.justdial.com/")
    await page.waitForLoadState("domcontentloaded");


    await expect(page.locator("text=Allow")).not.toBeVisible({ timeout: 5000 }).catch(() => { });

    await page.getByPlaceholder("Search for Packers and Movers").fill("Restaurants")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(5000)
    await expect(
        page.getByRole('link', { name: /Restaurants in/i })
    ).toBeVisible();
    await page.screenshot({path:"Restraunt.png"})
})