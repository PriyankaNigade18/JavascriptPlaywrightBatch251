/*
To check current status of test case we have in Playwright 
object that is testInfo object
*/

import {test,expect} from "@playwright/test"

test("Test for current status of testcase",async({page},testInfo)=>{

    await page.goto("https://www.saucedemo.com/");

    console.log(testInfo.status);
    console.log(testInfo.title);
    console.log(testInfo.duration);
    console.log(testInfo.expectedStatus);
    
    

    
    

})