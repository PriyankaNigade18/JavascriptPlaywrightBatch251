

import {test,expect} from "@playwright/test"

test("Automate svg element",async({page})=>{

    await page.goto("https://www.flipkart.com/");

    await page.locator("//input[@name='q']").fill("laptop");

    //click on search svg element 
   await page.locator("//*[local-name()='svg']").first().click();
    //navigation
    await page.waitForURL(/laptop/);

   await page.waitForTimeout(2000);


})