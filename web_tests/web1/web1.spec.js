import { test } from '@playwright/test';
const { assert } = require('chai')
const { LoginPage, Authorization } = require('../../framework')
let { input, expected } = require('./web1.testdata.json')
const { default: locators } = require("../../framework/locators")


test("Authorization page (Welcome back!)", async ({ page }) => {
    const loginPage = new LoginPage(page)
    const autorization = new Authorization(page)

    await test.step(`1.Open Home page`, async () => {
        await page.goto("")
        let home = await loginPage.checkTheHomePageVisibility()
        await assert.equal(home, true, `The home page has to be opened`)
    })
   await test.step(`2. Click on the "LOG IN" text`, async () => {
        let authorization = await loginPage.checkTheLoginPageIsOpen()
        await assert.equal(authorization, true, `The authorization page has to be opened`)
    })
    await test.step(`3. On the authorization page enter a valid email and password for the previously registered user (to check the entered password, click on the "eye” icon in the password field.)`, async () => {
        await autorization.setValues(input.mail, input.password)
        await autorization.clickEye()
        let password = await page.locator(locators.autorization.password).evaluate(e => e.value)
        await assert.equal(password, input.password, `After clicking on the "eye" icon for the password field, the password should be displayed        `)
    })
    await test.step(`4. Click the "Login" button `, async () => {
        await autorization.clickLogin()
        let actualResultStep4 = {
            mail: (await page.textContent(`(${locators.login.loginBtn})` + `[contains(text(),'${input.mail}')]`)).split("\n").filter(x=>x.includes("gmail")).toString().trim()
        }
        await page.click(`(${locators.login.loginBtn})` + `[contains(text(),'${input.mail}')]`)
        actualResultStep4.dropdown = await page.isVisible(locators.homePage.dropdown)
        expected.step4.mail = input.mail
        await assert.deepEqual(actualResultStep4, expected.step4, `The "Log in" button has to be changed to the "User@email" button (with the dropdown menu) from the left side in the Header of the page        `)
    })
})