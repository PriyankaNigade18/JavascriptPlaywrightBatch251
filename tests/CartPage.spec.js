
import {test,expect} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage.js"
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage.js";

let loginpage;
let invpage;
let cartpage;

test.beforeEach(async({page})=>{
    loginpage=new LoginPage(page);
    invpage=new InventoryPage(page);
    cartpage=new CartPage(page);

    await loginpage.gotoLoginPage();
    invpage=await loginpage.doLogin("standard_user","secret_sauce");
    await invpage.addProductIntoCart("Sauce Labs Fleece Jacket");
    cartpage=await invpage.gotoCartPage();
})

test("Tets for Cart product deatils",async({page})=>{

    // loginpage=new LoginPage(page);
    // invpage=new InventoryPage(page);
    // cartpage=new CartPage(page);

    // await loginpage.gotoLoginPage();
    // invpage=await loginpage.doLogin("standard_user","secret_sauce");
    // await invpage.addProductIntoCart("Sauce Labs Fleece Jacket");
    // cartpage=await invpage.gotoCartPage();
    let pname=await cartpage.getCartProductName();
    console.log("Cart product details: "+pname);

    await page.waitForTimeout(2000);
    

})

test("Tets for remove product from cart",async({page})=>{

    // loginpage=new LoginPage(page);
    // invpage=new InventoryPage(page);
    // cartpage=new CartPage(page);

    // await loginpage.gotoLoginPage();
    // invpage=await loginpage.doLogin("standard_user","secret_sauce");
    // await invpage.addProductIntoCart("Sauce Labs Fleece Jacket");
    // cartpage=await invpage.gotoCartPage();
    let product=cartpage.doRemoveProduct();
    console.log("Product removed from cart: "+product);

    await page.waitForTimeout(2000);
    

})

test("Tets for Continue shopping",async({page})=>{

    // loginpage=new LoginPage(page);
    // invpage=new InventoryPage(page);
    // cartpage=new CartPage(page);

    // await loginpage.gotoLoginPage();
    // invpage=await loginpage.doLogin("standard_user","secret_sauce");
    // await invpage.addProductIntoCart("Sauce Labs Fleece Jacket");
    // cartpage=await invpage.gotoCartPage();
    invpage=await cartpage.doContinueshopping();
    await invpage.addProductIntoCart("Sauce Labs Backpack");
    await invpage.gotoCartPage();
     await page.waitForTimeout(2000);
    

})

test("Tets for Checkout button is working or not",async({page})=>{

    // loginpage=new LoginPage(page);
    // invpage=new InventoryPage(page);
    // cartpage=new CartPage(page);

    // await loginpage.gotoLoginPage();
    // invpage=await loginpage.doLogin("standard_user","secret_sauce");
    // await invpage.addProductIntoCart("Sauce Labs Fleece Jacket");
    // cartpage=await invpage.gotoCartPage();
    cartpage.doClickCheckout();
     await page.waitForTimeout(2000);
    

})