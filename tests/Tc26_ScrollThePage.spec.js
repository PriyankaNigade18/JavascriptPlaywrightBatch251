
import {test,expect} from "@playwright/test"
import { scrollDown,scrollUp,scrollUpToElement } from "./Generic/Utility";

test("Scroll the webpage",async({page})=>{


await page.goto("https://www.amazon.in/");

//scroll down using utility
await scrollDown(page);

await page.waitForTimeout(1500);

//scrollUp
await scrollUp(page);

await page.waitForTimeout(1500);

//scroll up to element
let element=page.locator("//h2[@class='as-title-block-left']//span[contains(normalize-space(),'Electronics accessories')]");

await scrollUpToElement(element);

/*
//scroll the page down:evaluate()
await page.evaluate(()=>{
    //window.scrollTo(0,5000);
    window.scrollTo(0,document.body.scrollHeight);
});

await page.waitForTimeout(1500);

//scroll up
await page.evaluate(()=>{

    window.scrollTo(document.body.scrollHeight,0);
})

await page.waitForTimeout(1500);
//scroll upto Element
await page.locator("//span[text()='Best Sellers in Clothing & Accessories']").scrollIntoViewIfNeeded();


*/
await page.waitForTimeout(2000);

})