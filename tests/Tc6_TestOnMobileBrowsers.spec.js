

//import playwright library
import {test} from "@playwright/test"

test("Test for Mobile browsers",async({page})=>{

    await page.goto("https://www.flipkart.com/");

    await page.waitForTimeout(2000);
})
