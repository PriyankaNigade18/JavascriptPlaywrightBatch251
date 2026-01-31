

import {test,expect} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage.js";

test("Test for title",async({page})=>{
let loginpage=new LoginPage(page);
await loginpage.goToUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
let title=await loginpage.getPageTitle();
await expect(page).toHaveTitle(title);
console.log("Title is:"+title);
await page.waitForTimeout(2000);
})

test("Test for login with valid credentials",async({page})=>{
let loginpage=new LoginPage(page);
await loginpage.goToUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await loginpage.fillUserName("Admin");
await loginpage.fillPassowrd("admin123");
await loginpage.clickLoginButton();
//assertion
await expect(page).toHaveURL(/dashboard/);
await page.waitForTimeout(2000);
})

test("Test for login with invalid credentials",async({page})=>{
let loginpage=new LoginPage(page);
await loginpage.goToUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await loginpage.fillUserName("Admin1");
await loginpage.fillPassowrd("admin1233");
await loginpage.clickLoginButton();
//assertion
await expect(await loginpage.getWarningMessage()).toHaveText("Invalid credentials")
await page.waitForTimeout(2000);
})