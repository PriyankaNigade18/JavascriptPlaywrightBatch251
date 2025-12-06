
import {test,expect} from "@playwright/test"


test("Test for google search scenario",async({page})=>{

    await page.goto("https://www.google.com/");

    await page.locator("#APjFqb").fill("TestNg");

    //wait for locator-visible,state
    await page.waitForSelector("ul[role='listbox'] li");

    //get multiple suggestion
    let allOptions=await page.locator("ul[role='listbox'] li").allInnerTexts();
    console.log("Total Options are: "+allOptions.length);//10

    for(let option of allOptions)
    {
        console.log(option);
        
    }


    await page.waitForTimeout(2000);

    

})