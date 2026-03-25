import { expect  } from '@playwright/test'
import customer from '../testdate/customer.json'
class LoginPage {
    page:any
    url: string
    login: any
    name: any
    login_btn: any
    add_customer: any
    f_name: string
    l_name: string
    post_code: any
    add: any
    home: any
    acc : any
    currency: any
    process:any
    constructor(page) {
        this.page = page
        this.url = page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
        this.login = page.locator(".btn.btn-primary.btn-lg")
        this.name = page.locator('#userSelect')
        this.login_btn = page.locator('.btn.btn-default')
        this.add_customer = page.locator('[ng-click="addCust()"]')
        this.acc = page.locator('[ng-click="openAccount()"]')
        this.f_name = page.getByPlaceholder('First Name')
        this.l_name = page.getByPlaceholder('Last Name')
        this.post_code = page.getByPlaceholder('Post Code')
        this.add = page.locator('//button[@class="btn btn-default"]')
        this.home = page.locator('//button[@class="btn home"]')
        this.currency = page.locator('#currency')
        this.process = page.locator('//button[@type="submit"]')
    }
    async navigateUrl() {
        await this.url
    }
    async managerLogin() {
        await this.login.nth(1).click()
        await this.add_customer.click()
        await this.f_name.fill(customer.fName)
        await this.l_name.fill(customer.lName)
        await this.post_code.fill(String(customer.post))
        await this.add.click()
        // const dialog = await dialogPromise;
        // await expect(dialog.message()).toContain("Customer");

        // await dialog.accept();
        await this.acc.click()
        await this.name.selectOption(customer.name)
        await this.currency.selectOption(customer.currency)
        await this.process.click()
        await this.home.click()
    }
    async customerLogin(){
        await this.login.first().click()
        await this.name.selectOption(customer.name)
        await this.login_btn.click()
    }

}
export default LoginPage