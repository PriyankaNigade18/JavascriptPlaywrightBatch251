
import {test,expect} from "@playwright/test"

test("Automate Hidden element",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    //click on hide button
    await page.locator("#hide-textbox").click();

    await page.waitForTimeout(1000);
    //type into input box which is hidden then use js
    //await page.locator("#displayed-text").fill("hello All");

    await page.evaluate(()=>{
        document.querySelector("#displayed-text").value="Hello All";
    })

    //click on Show()
    await page.locator("#show-textbox").click();


    await page.waitForTimeout(1000);
})