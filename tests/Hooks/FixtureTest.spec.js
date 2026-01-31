

import {test} from "../../fixtures/auth.js";


test.beforeEach(async({page})=>{
    console.log("Before each executing.....");
    
await page.goto("https://automationplayground.com/crm/");
await page.locator("#SignIn").click();
})

test("Test crm login",async({crmLogin})=>{
   let page=crmLogin;
   await page.waitForTimeout(2000);

});

