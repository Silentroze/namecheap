const { default: locators } = require("../../locators")

class Authorization {
    constructor(page){
        this.page = page
    }
    async setValues(mail, password) {
        await this.page.fill(locators.autorization.mail, mail)
        await this.page.fill(locators.autorization.password, password)  
      }
    async clickLogin() {
        await this.page.click(locators.login.sumbmit)
    }

    async clickEye(){
        await this.page.click(locators.login.eyeIcon)
    }
}

module.exports = { 
    Authorization
}