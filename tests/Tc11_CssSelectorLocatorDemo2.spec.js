

// contains(): partial match*   starts-with : prefix match ^ ends-with(): suffix value $

import {test,expect} from "@playwright/test"

test("Test for CssSelector Methods",async ({page})=>{

await page.goto("https://www.amazon.in/");

//contains(): *
await page.locator("input[id*='tabsearch']").fill("mac");

await page.waitForTimeout(1000);

//starts-with ^
await page.locator("input[id^='twotabsearch']").clear();

await page.waitForTimeout(1000);

//ends-with() $
await page.locator("input[id$='box']").fill("watch");

await page.waitForTimeout(2000);


})