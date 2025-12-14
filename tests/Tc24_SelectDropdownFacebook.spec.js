
import {test,expect} from "@playwright/test"
import { selectByValue,selectByIndex,selectByLabel,selectBasedDropdown} from "./Generic/Utility.js";


test("Test facbook dropdowns",async({page})=>{

//open application
await page.goto("https://www.facebook.com/");

//click on create new account
await page.locator("//a[text()='Create new account']").click();

let dayDD=page.locator("#day");
let monthDD=page.locator("#month");
let yearDD=page.locator("#year");


await selectByValue(dayDD,"31");
await selectByIndex(monthDD,11);
await selectByLabel(yearDD,"2010");


/*
dayDD.selectOption("27");//value
await page.waitForTimeout(1000);
dayDD.selectOption({label:"31"});//label
await page.waitForTimeout(1000);
dayDD.selectOption({index:5})//index
*/


await page.waitForTimeout(2000);

})


test.only("Test dropdown with Utility",async({page})=>{

    //open application
await page.goto("https://www.facebook.com/");

//click on create new account
await page.locator("//a[text()='Create new account']").click();

let dayDD=page.locator("#day");
let dayoptions="//select[@id='day']//option";
let monthDD=page.locator("#month");
let monthoptions="//select[@id='month']//option";
let yearDD=page.locator("#year");
let yearoptions="//select[@id='year']//option";


await selectBasedDropdown(page,dayDD,dayoptions,"27");
await selectBasedDropdown(page,monthDD,monthoptions,"Apr");
await selectBasedDropdown(page,yearDD,yearoptions,"2010");

await page.waitForTimeout(2000);

})



// //generic function
// /**
//  * 
//  * @param {import("@playwright/test").Locator} selectLocator 
//  * @param {String} searchValue 
//  */
//  async function selectByValue(selectLocator,searchValue)
//  {
//     await selectLocator.selectOption(searchValue);
//  }

//  /**
//   * 
//   * @param {import("@playwright/test").Locator} selectLocator 
//   * @param {String} labelvalue 
//   */
//  async function selectByLabel(selectLocator,labelvalue)
//  {
//     await selectLocator.selectOption({label:labelvalue});
//  }

//  /**
//   * 
//   * @param {import("@playwright/test").Locator} selectLocator 
//   * @param {Number} indexNumber 
//   */
//  async function selectByIndex(selectLocator,indexNumber)
//  {
//     await selectLocator.selectOption({index:indexNumber});
//  }
 