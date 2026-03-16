import { test } from '@playwright/test'
import Guddi from '../PageObjectModel/guddi.page'
import fs from "fs"
import path from "path"
let dataitem = fs.readFileSync(path.join(__dirname, "../testdata/data.json"))
let data = JSON.parse(dataitem)

test('Flipkart End to End Scenario', async ({ page }) => {

    const gudi = new Guddi(page)

    await gudi.launchUrl(data.url)
    const closeBtn = page.getByRole('button', { name: '✕' });
    if (await closeBtn.isVisible()) {
        await closeBtn.click();
    }

    await gudi.clickHome()

    await gudi.clickGudiPadwaStore()

    await gudi.clickGudiCloth()

    for (const index of data.productIndex) {

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            gudi.clickProduct(index)
        ])

        await newPage.waitForLoadState()

        await newPage.getByText("Add to cart").click()

        await newPage.getByText("Go to cart").last().click()

        await newPage.locator('.css-g5y9jx.r-1m9ckf1.r-3da1kt.r-73fqs1.r-1jg9483').first().click()
        // await newPage.locator('css-g5y9jx r-1awozwy r-18u37iz r-mabqd8 r-1777fci r-1glkqn6').nth(1).click()

        await newPage.getByText("Place Order").click()

        await gudi.takeScreenshot()

        await newPage.close()
    }

})