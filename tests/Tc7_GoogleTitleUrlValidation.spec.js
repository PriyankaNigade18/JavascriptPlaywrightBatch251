
//import playwright library
import {test,expect} from "@playwright/test"

test("Test for Google Title and Url validation",async ({page})=>{

//open application
await page.goto("https://www.google.com/");

//get the title: title()
let appTitle=await page.title();
console.log("Application title: "+appTitle);

//validate title should be Google based on page
await expect(page).toHaveTitle("Google");//exact match...execution will stop

//test on stored variable
await expect(appTitle).toEqual("Google");//exactmatch

console.log("Title test.......");

//url 
let appUrl=page.url();
console.log("Application Url: "+appUrl);

//with respect to page
await expect(page).toHaveURL("https://www.google.com/")//exact match
//partial match /partial text/
await expect(page).toHaveURL(/google/);

//await expect(page).toHaveURL("google");//Error
//with respect to variable
expect(appUrl).toEqual("https://www.google.com/")//exact match

//partial match
expect(appUrl).toContain("google.com");

await page.waitForTimeout(2000);













})