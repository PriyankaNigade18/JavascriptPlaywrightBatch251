

import {test,expect} from "@playwright/test"

test("Test for Xpath Aixes",async({page})=>{

    //open application
    await page.goto("https://automationplayground.com/crm/customers.html?email-name=piyu1818%40gmail.com&password-name=saasdasd&submit-name=");

    //highligh ancestor node for John element
    
    await page.locator("//td[text()='John']//ancestor::tbody").highlight();

    await page.waitForTimeout(1000);

    //highlight parent node for John element
    await page.locator("//td[text()='John']//parent::tr").highlight();



    //get the all child text for row number 1
    let allchilds=await page.locator("//tbody//tr[1]//child::td").allInnerTexts();
    console.log("Total child elements for row1: "+allchilds.length);

    for(let ele of allchilds)
    {
        console.log(ele);
        
    }

    await page.waitForTimeout(1000);

    //highlight all rows after John:2 rows
    await page.locator("//td[text()='John']//following::tr").highlight();

    await page.waitForTimeout(1000);
    //highlight all rows before John
    await page.locator("//td[text()='John']//preceding::tr").highlight();

     await page.waitForTimeout(1000);

    //highlight all following sigblings of John
    await page.locator("//td[text()='John']//following-sibling::td").highlight();
    await page.waitForTimeout(1000);

    //highlight all preceding sigblings of John
    await page.locator("//td[text()='John']//preceding-sibling::td").highlight();

    await page.waitForTimeout(2000);




})