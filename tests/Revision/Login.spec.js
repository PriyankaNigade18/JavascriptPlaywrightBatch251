
//import {test,expect} from "@playwright/test"
import {test,expect} from "../../fixtures/swaglabfixture.js"
import { SwagLabPage } from "../../pages/SwagLabPage.js"
import { log } from "node:console";

test("Test for login ",async({page})=>{

    //create object of page class
    let loginpage=new SwagLabPage(page);
    await loginpage.gotoApp();
    await loginpage.fillUserName("standard_user");
    await loginpage.fillPassword("secret_sauce");
    await loginpage.clickLoginButton();

    let title=await loginpage.getAppTitle();
    console.log("Title is: "+title);

    await page.waitForTimeout(2000);

})

test.only("Test with fixture",async({page,loginwithpom})=>{

    await page.waitForTimeout(2000);
})