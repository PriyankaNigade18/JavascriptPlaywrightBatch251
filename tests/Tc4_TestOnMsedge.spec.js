
//import playwright library
import {chromium, test} from "@playwright/test"

test("Launch google on MicrosoftEdge browser",async()=>{

    //creating instance of browser
    //launch()Returns the browser instance.
    let browser=await chromium.launch({headless:false,channel:"msedge"})

    //create new browser context
    let context=await browser.newContext();

    //create new page
    let page=await context.newPage();

    //open application 
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    await page.waitForTimeout(3000);
})