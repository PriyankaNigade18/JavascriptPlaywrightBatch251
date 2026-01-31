
/*
Page object should follow encapsulation 
private Locators+public actions

step1: Constructor
step2: private Locators
step3: public actions(methods)
*/

export class LoginPage{

    //step1:Locators
    //private
    #page;
    #username;
    #password;
    #loginButton;
    #warningMessage;

    //step2: Constructor to initialize locator
    constructor(page)//page is from Playwright library
    {
        this.#page=page;
        this.#username=page.locator("//input[@name='username']");
        this.#password=page.locator("//input[@name='password']");
        this.#loginButton=page.locator("//button[@type='submit']");
        this.#warningMessage=page.locator("//p[text()='Invalid credentials']");

    }


    //Step3:actions
    async goToUrl(url)
    {
        await this.#page.goto(url);
    }

    async getWarningMessage()
    {
       return this.#warningMessage;
    }
    async fillUserName(un)
    {
       await this.#username.fill(un);
    }

    async fillPassowrd(psw)
    {
        await this.#password.fill(psw);

    }

    async clickLoginButton()
    {
        await this.#loginButton.click();
        //navigate:return next page object
    }


    async doLogin(un,psw)
    {
        await this.#username.fill(un);
        await this.#password.fill(psw);
        await this.#loginButton.click();
    }

    async getPageTitle()
    {
        return await this.#page.title();
    }




}

