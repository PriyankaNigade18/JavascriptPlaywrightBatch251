
import {test,expect} from "@playwright/test"


test("Autmate newWindow/new tab",async({page})=>{

    await page.goto("https://www.orangehrm.com/en/contact-sales");
    //click on Cookies
    await page.locator("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click();


    //To automate new Tab
    let [newTab]=await Promise.all([
                                page.waitForEvent('popup'),
                                //click on linkedin---navigating to new tab
                                page.locator("//a[contains(@href,'linkedin')]").click()

                                ])
                                

    await page.waitForTimeout(2000);

    //title
    console.log(await newTab.title());
    
    //close child tab
    await newTab.close();

    //focus on active page:Brings page to front (activates tab).
    await page.bringToFront();


    await page.waitForTimeout(2000);

})