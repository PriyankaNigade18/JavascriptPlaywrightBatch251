
import {test as base,expect} from "@playwright/test"
import { SwagLabPage } from "../pages/SwagLabPage";

export const test=base.extend({

login:async({page},use)=>{

console.log("Before test fixture executes");
    
await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").fill("standard_user");
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
await use(page)

console.log("after test fixture excuted");


}
,
loginwithpom:async({page},use)=>{
//fixture with page object model
let loginpage=new SwagLabPage(page);
await loginpage.gotoApp();
await loginpage.doLogin("standard_user","secret_sauce");
await use(loginpage);


}

})

export {expect}