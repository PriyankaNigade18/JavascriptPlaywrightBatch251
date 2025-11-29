
//import playwright library

import {test} from "@playwright/test"
/*
Fixtures In Playwright(Environment details)
------------------------------------------
1.browser: create instance of Original browser(chromium,firefox,webkit,chrome,edge)
2.browser context:Independent session inside browser
3.page: Seperate tab in context
4.request: api testing
*/

//page: Isolated Page instance, created for each test.
test("Test for Google application",async({page})=>{

    //open google application
    await page.goto("https://www.google.com");

    //get the title and print it
    let appTitle=await page.title();
    console.log("Application title is: "+appTitle);
    
    //get the page current url and print it
    let appUrl=page.url();
    console.log("Application url is: "+appUrl);

    //Waits for the given timeout in milliseconds.
    await page.waitForTimeout(5000);
    
})