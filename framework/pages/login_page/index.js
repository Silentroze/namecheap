const { default: locators } = require("../../locators")

class LoginPage {
    constructor(page) {
        this.page = page
    }

    async checkTheHomePageVisibility() {
        await this.page.locator(locators.login.homePage).waitFor('visible')
        let condition = await this.page.$(locators.login.homePage)
        return condition.isVisible()
    }
    async loginToAcc(){
        await this.page.click(locators.login.loginBtn)
    }
    async checkTheLoginPageIsOpen() {
        await this.loginToAcc()
        await this.page.locator(locators.autorization.page).waitFor('visible')
        let condition = await this.page.$(locators.autorization.page)
        return condition.isVisible()
    }
}

module.exports = { LoginPage }