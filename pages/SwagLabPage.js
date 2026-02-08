

//Encapsulation= private data + public method
//Page object should have 1.Locator  2.Constrcutor 3 actions

 export class SwagLabPage{

    //1.locator
    #page;
    #username;
    #password;
    #loginButton;

    //2
    constructor(page)//playwright page comming from test case
    {
        this.#page=page;
        this.#username=page.locator("#user-name");
        this.#password=page.locator("#password");
        this.#loginButton=page.locator("#login-button");

    }

//3

    async gotoApp()
    {
        await this.#page.goto("https://www.saucedemo.com/",{timeout:2000});
    }

     async fillUserName(un)
     {
       await  this.#username.fill(un);
     }

     async fillPassword(psw)
     {
        await this.#password.fill(psw);
     }

     async clickLoginButton()
     {
        await this.#loginButton.click();
     }

     async doLogin(un,psw)
     {
        await  this.#username.fill(un);
        await this.#password.fill(psw);
        await this.#loginButton.click();
     }

     async getAppTitle()
     {
        return await this.#page.title();
     }




 }