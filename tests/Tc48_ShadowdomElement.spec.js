
import {test,expect} from "@playwright/test"

test("Test for Shadow dom element",async({page})=>{

    await page.goto("https://selectorshub.com/xpath-practice-page/");

    //shadow dom element
    await page.locator("#kils").scrollIntoViewIfNeeded();
    await page.locator("#kils").fill("Priyanka");

    await page.waitForTimeout(2000);
})


test.only("Test shadow dom element inside frame",async({page})=>{

    await page.goto("https://selectorshub.com/iframe-in-shadow-dom/");
    await page.frameLocator("#pact1").locator("#jex").fill("Playwright");


    await page.waitForTimeout(2000);
})