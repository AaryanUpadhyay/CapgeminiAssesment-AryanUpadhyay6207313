import { expect } from "@playwright/test"
import amount from "../testdate/amount.json"
class DepositPage {
    page: any
    deposit: any
    dAmount: number
    depositbtn: any
    balance: any
    withdraw: any
    constructor(page) {
        this.page = page
        this.deposit = page.locator('[ng-click="deposit()"]')
        this.withdraw = page.locator('[ng-click="withdrawl()"]')
        this.dAmount = page.getByPlaceholder('amount')
        this.depositbtn = page.locator('//button[@type="submit"]')
        this.balance = page.locator('//strong[@class="ng-binding"]').nth(1)
    }
    async depositMoney() {
        await this.deposit.click()
        await this.dAmount.fill(String(amount.amount))
        await this.depositbtn.click()
        const balanceText = await this.balance.textContent()
        expect(Number(balanceText)).toBeGreaterThan(0)
        console.log(balanceText)
    }
    async withdrawMoney(){
        await this.withdraw.click()
        await this.page.waitForTimeout(1000)
        await this.dAmount.fill(String(amount.amount))
        await this.depositbtn.click()
        const balText = await this.balance.textContent()
        expect(Number(balText)).toBe(0)
    }
}
export default DepositPage