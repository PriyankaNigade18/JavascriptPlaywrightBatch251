import {test,expect} from "@playwright/test"

test("Automate multiple tabs/winodws",async({browser})=>{

    //new context
    const context=await browser.newContext();
    //new page
    const page=await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let homePageTitle=await page.title();

    await page.locator("//a[contains(@href,'linkedin')]").click();
    await page.locator("//a[contains(@href,'facebook')]").click();
    await page.locator("//a[contains(@href,'twitter')]").click();
    await page.locator("//a[contains(@href,'youtube')]").click();
    await page.locator("//a[contains(@href,'orangehrm')]").last().click();

    await page.waitForTimeout(4000);

    //total pages
    const allPages=context.pages();
    console.log("Total Open tabs are: "+allPages.length);
    
    
    for(let pg of allPages)
    {
        console.log(await pg.title());
        //close child pages/tabs
        if(await pg.title()!==homePageTitle)
        {
            await pg.close();
        }
        
        
    }

await page.waitForTimeout(3000);
})