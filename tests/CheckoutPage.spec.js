import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";
import { CartPage } from "../pages/CartPage.js";
import { CheckoutPage } from "../pages/CheckoutPage.js";

test("Test for checkout process",async({page})=>{
    let loginpage=new LoginPage(page);
    let invpage=new InventoryPage(page);
    let cartpage=new CartPage(page);
    let chkpage=new CheckoutPage(page);

    await loginpage.gotoLoginPage();
    invpage=await loginpage.doLogin("standard_user","secret_sauce");
    await invpage.addProductIntoCart("Sauce Labs Fleece Jacket");
    cartpage=await invpage.gotoCartPage();
    chkpage=await cartpage.doClickCheckout();
    await chkpage.doCheckout("Jay","Nigade","411047");

    await page.waitForTimeout(2000);
})