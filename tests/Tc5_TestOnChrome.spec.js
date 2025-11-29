
//import playwright library
import {chromium, test} from "@playwright/test"
import { log } from "node:console";

test("Test for launching ChromeBrowser",async()=>{

    //launch chrome browser
    let browser=await chromium.launch({headless:false,channel:"chrome"});

    //browser--->context
    let context1=await browser.newContext();

    //context--->new page
    let page=await context1.newPage();

    //open application
   await page.goto("https://www.amazon.co.in");

   console.log("Title is: "+await page.title());
   console.log("Url is: "+await page.url());
   
   await page.waitForTimeout(2000);



})