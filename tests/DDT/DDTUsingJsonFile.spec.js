import {test,expect} from "@playwright/test"

import testdata from "../../TestData/Crmlogin.json"

for(let data of testdata)
{
test("Test for Login"+data.id,async({page})=>{

    await page.goto("https://automationplayground.com/crm/login.html");

    await page.locator("#email-id").fill(data.email);
    await page.locator("#password").fill(data.password);
    await page.locator("#submit-id").click();

    //assertion
    await expect(page).toHaveURL(/customers/);
    await page.waitForTimeout(2000);
})

}