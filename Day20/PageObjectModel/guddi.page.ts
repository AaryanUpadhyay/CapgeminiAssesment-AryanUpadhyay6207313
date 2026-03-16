class Guddi {
    constructor(page) {
        this.page = page
    }
    async launchUrl(url: string) {
        await this.page.goto(url)
    }
    async clickHome() {
        await this.page.getByRole('link', { name: 'Home' }).first().click()
    }
    async clickGudiPadwaStore() {
        await this.page.locator("//a[@class='_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djtk9 _1i2djtir _1i2djtja _1i2djtjb']").nth(1).click()
    }
    async clickGudiCloth() {
        await this.page.locator("//a[@class='_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djtk9 _1i2djtir _1i2djtja _1i2djtjb']").nth(1).click()
        // await this.page.locator('img[src="https://rukminim1.flixcart.com/fk-p-flap/380/510/image/f63af45677b331e7.jpg?q=90"]').click()
    }
    async clickProduct(index:number){
    const products = this.page.locator("div[data-id]")
    await products.nth(index).click()
}


    async takeScreenshot() {
        await this.page.screenshot({ path: 'flipkartOrder.png', fullPage: true })
    }
}

export default Guddi