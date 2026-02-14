import {InventoryPage} from "../pages/InventoryPage.js";
export class LoginPage{


    #page;
    #username;
    #password;
    #loginButton;
    #warningMessage;

    constructor(page)
    {   this.#page=page;
        this.#username=page.locator("#user-name");
        this.#password=page.locator("#password");
        this.#loginButton=page.locator("#login-button");
        this.#warningMessage=page.locator("h3[data-test='error']");
    }


    async gotoLoginPage()
    {
        await this.#page.goto("https://www.saucedemo.com/",{waitUntil:'domcontentloaded'});
        await this.#page.waitForTimeout(2000);
    }

    async openApp(baseUrl)
    {
        await this.#page.goto(baseUrl,{waitUntil:'domcontentloaded'})
         await this.#page.waitForTimeout(2000);
    }
    async fillUsername(un)
    {
        await this.#username.fill(un);

    }


    async fillPassword(psw)
    {
        await this.#password.fill(psw);
    }

    async clickLoginButton()
    {
        await this.#loginButton.click();
        //navigating to inventory page: return inventory page object
        return new InventoryPage(this.#page);
    }

    async doLogin(un,psw)
    {
        await this.#username.fill(un);
        await this.#password.fill(psw);
        await this.#loginButton.click();
        return new InventoryPage(this.#page);
    }

    async getAppTitle()
    {
        return await this.#page.title();
    }

    async getAppUrl()
    {
        return this.#page.url();
    }

    async getWarningMessage()
    {
       return await this.#warningMessage;
    }


}