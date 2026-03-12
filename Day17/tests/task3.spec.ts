import { test, expect } from "@playwright/test";

test("Handle JS Alerts", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.once("dialog", async dialog => {
        await page.waitForTimeout(2000)
        expect(dialog.type()).toBe("alert");
        await dialog.accept();
    });

    await page.getByRole("button", { name: "Click for JS Alert" }).click();
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");


    page.once("dialog", async dialog => {
        await page.waitForTimeout(2000)
        expect(dialog.type()).toBe("confirm");
        await dialog.dismiss();
    });

    await page.getByRole("button", { name: "Click for JS Confirm" }).click();
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");

    page.once("dialog", async dialog => {
        await page.waitForTimeout(2000)
        expect(dialog.type()).toBe("prompt");
        await dialog.accept("Playwright Testing");
    });

    await page.getByRole("button", { name: "Click for JS Prompt" }).click();
    await expect(page.locator("#result")).toHaveText("You entered: Playwright Testing");
    await page.screenshot({path:"JS_Alerts.png"})
    await page.waitForTimeout(2000)

});