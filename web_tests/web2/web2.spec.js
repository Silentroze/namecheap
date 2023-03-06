import { test } from '@playwright/test';
const { assert } = require('chai')
const { LoginPage, Authorization } = require('../../framework')
let { input, expected } = require('./web2.testdata.json')
const { default: locators } = require("../../framework/locators")

test("Authorization page. Not registered user", async ({ page }) => {
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
    await test.step(`3. On the authorization page enter not registered email and any password)`, async () => {
        await autorization.setValues(input.mail, input.password)
        await autorization.clickEye()
        let password = await page.locator(locators.autorization.password).evaluate(e => e.value)
        await assert.equal(password, input.password, `After clicking on the "eye" icon for the password field, the password should be displayed`)
    })
    await test.step(`4. Click the "Login" button `, async () => {
        await autorization.clickLogin()
        let errorMsg = await page.textContent(locators.autorization.upperTooltip)
        await assert.equal(errorMsg, expected.step4, `If the user not registered, errors messages such as: “Uh oh! Email or password is incorrect” should be displayed`)
    })
})