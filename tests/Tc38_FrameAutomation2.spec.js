
import {test,expect} from "@playwright/test"

test("Automate nested frames",async({page})=>{

    page.setDefaultTimeout(10000);
    await page.goto("https://selectorshub.com/iframe-scenario/");

    let frame1=page.frameLocator("(//iframe[@id='pact1'])[1]");
    await frame1.locator("#inp_val").fill("Selenium");

    //frame1-->frame2-->ele
    let frame2=frame1.frameLocator("#pact2");
    await frame2.locator("#jex").fill("playwright");

    //frame2--->frame3--->ele

    await frame2.frameLocator("#pact3").locator("#glaf").fill("Programming");

    await page.waitForTimeout(2000);
})