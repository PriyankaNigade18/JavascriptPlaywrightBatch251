import {test,expect} from "@playwright/test"

test("Automate farme simple/nested ",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //element is inside frame 1.identify frame and 2. from frame identify element

    let frame1=page.frameLocator("//frame[@src='frame_1.html']");
    await frame1.locator("//input[@name='mytext1']").fill("testing");

    //frame2-->type
await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']").fill("Selenium");

//frame3
//page.frame();//Returns frame matching the specified criteria. Either name or url must be specified.

let frame3=page.frameLocator("//frame[@src='frame_3.html']");
    await frame3.locator("//input[@name='mytext3']").fill("Playwright");

    //Nested frame
    let nestedframe=frame3.frameLocator("//iframe[contains(@src,'docs.google')]");

    //radio button
    await nestedframe.locator("#i9").click();

    await page.waitForTimeout(3000);
})