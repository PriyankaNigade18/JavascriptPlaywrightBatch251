import {test,expect} from "@playwright/test"

test("test for autoWait",async({page})=>{
//global
    test.setTimeout(50000);
    page.setDefaultTimeout(10000);

    await page.goto("https://automationplayground.com/crm/login.html");


    let emailId=page.locator("#email-id");//here autowait is not applicable
        emailId.waitFor({timeout:10000});//TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
        await emailId.fill("test@gmail.com");//here autowait is applicable:Error: locator.fill: Test timeout of 30000ms exceeded.


        await page.locator("#password").fill("test123");

        await page.locator("#submit-id").click();

        //navigation we can wait for Url
        //await page.waitForURL(/products/,{timeout:10000});//autowait is applicable 30sec:Error: page.waitForURL: Test timeout of 30000ms exceeded.

        //assertion
        await expect(page).toHaveURL(/customers1/,{timeout:2000});//autowait is applicable here its 5sec:Timeout: 5000ms

        await page.waitForLoadState("load");//load is default
        
    await page.waitForTimeout(2000);
})