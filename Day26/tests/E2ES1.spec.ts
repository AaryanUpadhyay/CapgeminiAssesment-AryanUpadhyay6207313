import {test} from '@playwright/test'
import LoginPage from '../PageObjectModel/login.page'
import DepositPage from '../PageObjectModel/account.page'

test("E2ES1", async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.navigateUrl()
    await loginPage.managerLogin()
    await loginPage.customerLogin()
    const Deposit = new DepositPage(page)
    await Deposit.depositMoney()
    await Deposit.withdrawMoney()
})