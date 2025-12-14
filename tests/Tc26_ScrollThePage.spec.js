
import {test,expect} from "@playwright/test"


test("Scroll the webpage",async({page})=>{

await page.goto("https://www.amazon.in/");

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
await page.waitForTimeout(2000);

})