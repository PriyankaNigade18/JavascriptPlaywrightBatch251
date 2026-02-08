//import {test,expect} from "@playwright/test"
import {test,expect} from "../../fixtures/swaglabfixture.js"

test("Test for swaglab login",async({page})=>{

await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").fill("standard_user");
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
})

test.only("Test using fixture",async({page,login})=>{

    await expect(page).toHaveURL(/inventory/);
    console.log("Url is: "+page.url());
    
    await page.waitForTimeout(2000);
})