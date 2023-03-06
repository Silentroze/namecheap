export default{
    "autorization":{
        "mail":'//*[@type="email"]',
        "password": '//*[@name="password"]',
        "page": '//*[@class="authorization-page ng-scope"]',
        "tooltip": '//*[@ng-show="authForm.email.$dirty && (authForm.email.$error.email || authForm.email.$error.pattern)"]',
        "upperTooltip": '//*[@class="noty_text"]'
    },
    "login":{
        "loginBtn": '//*[@class="ssls-toolbar__btn-text"]',
        "homePage": '//*[@class="ssls-home-page"]',
        "sumbmit":'//*[@type="submit"]',
        "eyeIcon": '//*[@class="icon icon-eye"]'
    },
    "homePage":{
        "dropdown": '//*[@class="ssls-dropdown ssls-header-user ssls-header-dropdown"]',
        "profile": '//*[@href="/user/profile"]'
    },
    "form" :{
        "name":`//*[@class="text ng-binding"][@ng-hide="activeRow === 'name'"]`,
        "email":`//*[@class="text ng-binding"][@ng-hide="activeRow === 'email'"]`,
        "password":`//*[@class="text ng-binding"][@ng-hide="activeRow === 'password'"]`,
        "phone":`//*[@class="text ng-binding"][@ng-hide="activeRow === 'phone'"]`,
        "address":`//*[@class="text ng-binding"][@ng-hide="activeRow === 'address'"]`,
        "pin":`//*[@name="supportPin"]`,
        "news":`//*[@name="newsletterOn"]`,
    }
}