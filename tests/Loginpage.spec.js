
//import {test,expect} from "@playwright/test"
import {test,expect} from "../fixtures/basefixture.js"
import { LoginPage } from "../pages/LoginPage"
import {InventoryPage} from "../pages/InventoryPage.js";


test("Test for login with valid credentials",async({page})=>{

    let loginpage=new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.doLogin("standard_user","secret_sauce");
    await expect(page).toHaveURL(/inventory/);
    await page.waitForTimeout(2000);

})

test("Test login without username and password",async({page})=>{

    let loginpage=new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.doLogin("","");
    let messageloc=await loginpage.getWarningMessage();
    await expect(messageloc).toHaveText("Epic sadface: Username is required");
    await page.waitForTimeout(2000);

})

test("Test login with fixture",async({page,loginFixture})=>{
    console.log("fixture test completed");
    
  await page.waitForTimeout(2000);
})