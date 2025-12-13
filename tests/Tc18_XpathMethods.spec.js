
import {test,expect} from "@playwright/test"

test("Test amazon with Xpath Methods",async({page})=>{

//open application
await page.goto("https://www.amazon.in/");

//sell:xpath with text()
await page.locator("//a[text()='Sell']").click();

//get the header text
let headerText=await page.locator("//h1").innerText();
console.log("Header text is: "+headerText);

//click on Cart:xpath with normalize-space()
await page.locator("(//span[normalize-space()='Cart'])[2]").click();

let cartText=await page.locator("//h3[normalize-space()='Your Amazon Cart is empty']").innerText();
console.log("Cart Text is: "+cartText);

//search element : xpath with contains()
await page.locator("//input[contains(@id,'searchtext')]").pressSequentially("watch",{delay:30});
//press enter key from keyword
await page.keyboard.press('Enter');

//or
//await page.locator("//input[contains(@id,'searchtext')]").press('Enter');

//get the result for watch from watch page
let searchText=await page.locator("//h2//span[contains(text(),'results for')]").innerText();
console.log("Search Text: "+searchText);

let searchText2=await page.locator("//h2//span[contains(text(),'results for')]").textContent();
console.log("Search Text: "+searchText2);

//starts-with: search box of amazon

 let searchEle=page.locator("//input[starts-with(@id,'two')]");

 //clear the text
 await searchEle.clear();

 await page.waitForTimeout(1000);

 //search for bag
 await searchEle.fill("bag");
 //await searchEle.press('Enter');
await page.keyboard.press('Enter');

await page.waitForTimeout(2000);



})