
import {test,expect} from "@playwright/test"

test("Get the screenshot of app",async({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(5000);
    //await page.waitForLoadState("load",{timeout:10000});

    await page.screenshot({path:"./Screenshots/AmazonPage.png"});

    //full page screenshot
    await page.screenshot({path:"./Screenshots/AmazonFullPage.png",fullPage:true});


    await page.waitForTimeout(2000);
    
})

test("Get the Full screenshot of app",async({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(5000);
   
    //full page screenshot
    await page.screenshot({path:"./Screenshots/AmazonFullPage.png",fullPage:true});


    await page.waitForTimeout(2000);
    
})

test.only("Get the screenshot of Element",async({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(5000);
   
    let element=page.locator("//img[contains(@alt,'Phantom Black Booking for Ex-Showroom Price')]").first();

    element.screenshot({path:"./Screenshots/AmazonHeadingElement.png"});

   


    await page.waitForTimeout(2000);
    
})

