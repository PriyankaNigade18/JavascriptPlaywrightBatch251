
import {test,expect} from "@playwright/test"


test("Navigation commands test",async({page})=>{


//navigate to google application
await page.goto("https://www.google.com/");

console.log("Title is: "+await page.title() );

//navigate to facebook application
await page.goto("https://www.facebook.com");

console.log("Title is: "+await page.title() );

await page.waitForTimeout(1000);

//gotBack()
await page.goBack();//Google
//assertion
await expect(page).toHaveTitle("Google");

await page.waitForTimeout(1000);
//goforward()
await page.goForward();//facebook

//patail match
await expect(page).toHaveTitle(/Facebook/);

await page.waitForTimeout(1000);

//refresh page:reload()
await page.reload();
//patail match
await expect(page).toHaveTitle(/Facebook/);

await page.waitForTimeout(2000);



})