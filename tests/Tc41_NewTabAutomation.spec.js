
import {test,expect} from "@playwright/test"

test("Open new tab ",async({page})=>{

    //open application
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log("title is: "+await page.title());
    

    //to handle new tab 
    let [newTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[contains(@href,'linkedin')]").click()//new tab will open
    ])

      await page.waitForTimeout(2000);

    //click on link
   // await page.locator("//a[contains(@href,'linkedin')]").click();//new tab will open
    console.log("New tab title is: "+await newTab.title());

    //open facebook
    let [facebookTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[contains(@href,'facebook')]").click()//new tab will open
    ])

    console.log("Title is: "+await facebookTab.title());

    
        //close child tab
        // await newTab.close();

        // await page.waitForTimeout(2000);
        // await facebookTab.close();

    //home page -->enter username
    await page.bringToFront();

    await page.getByPlaceholder("Username").fill("Admin");

    await page.waitForTimeout(3000);
})