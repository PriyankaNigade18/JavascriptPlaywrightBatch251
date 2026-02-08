import {test,expect} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage.js"
import {InventoryPage} from "../pages/InventoryPage.js";

//global variable
let loginpage;
let invpage;

test.beforeEach(async({page})=>{
    
loginpage=new LoginPage(page);
invpage=new InventoryPage(page);
await loginpage.gotoLoginPage();
invpage=await loginpage.doLogin("standard_user","secret_sauce");
})


test("Test for Total product count",async({page})=>{
// let loginpage=new LoginPage(page);
// let invpage=new InventoryPage(page);
// await loginpage.gotoLoginPage();
// invpage=await loginpage.doLogin("standard_user","secret_sauce");
let count=await invpage.getTotalProductCount();
console.log("Total Product count is: "+count);

await page.waitForTimeout(2000);


})

test("Test for product details",async({page})=>{
// let loginpage=new LoginPage(page);
// let invpage=new InventoryPage(page);
// await loginpage.gotoLoginPage();
// invpage=await loginpage.doLogin("standard_user","secret_sauce");
await invpage.getProductDetails();

await page.waitForTimeout(2000);

})

test("Test for Adding product intoCart",async({page})=>{
// let loginpage=new LoginPage(page);
// let invpage=new InventoryPage(page);
// await loginpage.gotoLoginPage();
// invpage=await loginpage.doLogin("standard_user","secret_sauce");
await invpage.addProductIntoCart("Sauce Labs Bolt T-Shirt");
await page.waitForTimeout(2000);
})

test("Test for open cart page",async({page})=>{
// let loginpage=new LoginPage(page);
// let invpage=new InventoryPage(page);
// await loginpage.gotoLoginPage();
// invpage=await loginpage.doLogin("standard_user","secret_sauce");
// await invpage.addProductIntoCart("Sauce Labs Bolt T-Shirt");
await invpage.gotoCartPage();
await page.waitForTimeout(2000);
})