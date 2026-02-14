
import{test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { OverviewPage } from "../pages/OverviewPage";

test("Test for completing payment process",async({page})=>{
let loginpage=new LoginPage(page);
    let invpage=new InventoryPage(page);
    let cartpage=new CartPage(page);
    let chkpage=new CheckoutPage(page);
    let ovpage=new OverviewPage(page);

    await loginpage.gotoLoginPage();
    
    invpage=await loginpage.doLogin("standard_user","secret_sauce");
    await invpage.addProductIntoCart("Sauce Labs Fleece Jacket");
    cartpage=await invpage.gotoCartPage();
    chkpage=await cartpage.doClickCheckout();
    ovpage=await chkpage.doCheckout("Jay","Nigade","411047");
   await ovpage.getPaymentDetails();
   let message=await ovpage.doCompleteProcess();
    console.log("Final message: "+message);

    await page.waitForTimeout(2000);
    
})
