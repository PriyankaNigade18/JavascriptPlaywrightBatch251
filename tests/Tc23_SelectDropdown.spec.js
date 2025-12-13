
import {test,expect} from "@playwright/test"

test("Test Select tag based dropdown",async({page})=>{

    await page.goto("https://www.amazon.in/");

    //identify dropdown +select option
    //select option based on value
   // await page.locator("#searchDropdownBox").selectOption("search-alias=audible");

    let selectDD=page.locator("#searchDropdownBox");
    //select by value
    await selectDD.selectOption("search-alias=audible");

    await page.waitForTimeout(1000);

    //select  by label(visible text)
    await selectDD.selectOption({label:"Gift Cards"});

    await page.waitForTimeout(1000);
    //select by index
    await selectDD.selectOption({index:3});

    await page.waitForTimeout(2000);
})