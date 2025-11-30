

import {test,expect} from "@playwright/test"


test("Test for CssSelector locators",async({page})=>{

//open application
await page.goto("https://automationplayground.com/crm/");

//cssSelector with id = id="SignIn"--> a#SignIn
await page.locator("a#SignIn").click();

//cssSelector with id: email
await page.locator("#email-id").fill("test@gmail.com");

//cssSelector with attribute
await page.locator("input[name='password-name']").fill("test123");


//checkbox/radio button: click() check() uncheck()
//cssSelector with id
await page.locator("#remember").click();

//class="btn btn-default btn-primary"
//        c1     c2        c3
//cssSelector with class name
//await page.locator("button.btn").click();

await page.locator("button.btn[type='submit']#submit-id").click();

//assertion on next page url
await expect(page).toHaveURL(/customers/);
console.log("User Naviagated to : "+page.url());




await page.waitForTimeout(2000);

})