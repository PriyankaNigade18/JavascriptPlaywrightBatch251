//import {test,expect} from "@playwright/test"

import {test} from "../../fixtures/auth.js";

test.describe.serial("This is for CRM application",()=>{


test.beforeEach(async({page})=>{
await page.goto("https://automationplayground.com/crm/");
await page.locator("#SignIn").click();


})

test("Test for login",async({crmLogin})=>{
// await page.getByPlaceholder("Enter email").fill("test@gmail.com");
// await page.getByPlaceholder("Password").fill("test123");
// await page.locator("#submit-id").click();
let page=crmLogin;
await page.waitForTimeout(2000);
})

test("Test for logout",async({crmLogin})=>{
// await page.getByPlaceholder("Enter email").fill("test@gmail.com");
// await page.getByPlaceholder("Password").fill("test123");
// await page.locator("#submit-id").click();
let page=crmLogin;
await page.locator("//a[text()='Sign Out']").click();
await page.waitForTimeout(2000);
})

})
