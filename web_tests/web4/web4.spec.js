import { test } from '@playwright/test';
const { assert } = require('chai')
const { LoginPage, Authorization } = require('../../framework')
let { input, expected } = require('./web4.testdata.json')
const { default: locators } = require("../../framework/locators")


test.beforeAll(async ({ browser }) => {
    let page = await browser.newPage();
    let loginPage = new LoginPage(page)

    let autorization = new Authorization(page)
    await page.goto("Log in to the user’s account")
    await loginPage.loginToAcc()
    await autorization.setValues(input.mail, input.password)
    await autorization.clickLogin()
    await page.click(locators.homePage.dropdown)
    await page.click(locators.homePage.profile)
    expected.info = {
        name: await page.textContent(locators.form.name),
        email: await page.textContent(locators.form.email),
        password: await page.textContent(locators.form.password),
        phone: await page.textContent(locators.form.phone),
        address: await page.textContent(locators.form.address),
        pin: await page.textContent(locators.form.pin),
        news: await page.textContent(locators.form.news)
    }
    page.close()
})

test("My profile page. Client area", async ({ page }) => {
    let loginPage = new LoginPage(page)
    let autorization = new Authorization(page)
    await test.step(`1.Log in to the user’s account`, async () => {
        await page.goto("")
        await loginPage.loginToAcc()
        await autorization.setValues(input.mail, input.password)
        await autorization.clickLogin()
        await page.click(locators.homePage.dropdown)
        await page.click(locators.homePage.profile) 
    })
    await test.step(`2. Click on the "LOG IN" text`, async () => {

    })
    await test.step(`3. On the authorization page enter a valid email and password for the previously registered user (to check the entered password, click on the "eye” icon in the password field.)`, async () => {

    })
    await test.step(`4. Click the "Login" button `, async () => {

    })
})