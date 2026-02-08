
import {InventoryPage} from "../pages/InventoryPage.js"
import { CheckoutPage } from "./CheckoutPage.js";
export class CartPage{

    #page;
    #productName;
    #removeBtn;
    #continueShoppintBtn;
    #checkoutBtn;

    constructor(page)
    {
        this.#page=page;
        this.#productName=page.locator(".inventory_item_name");
        this.#removeBtn=page.locator("//button[text()='Remove']");
        this.#continueShoppintBtn=page.locator("#continue-shopping");
        this.#checkoutBtn=page.locator("#checkout");


    }

async getCartProductName()
{
    return await this.#productName.innerText();
}

async doRemoveProduct()
{
    let product=await this.#productName.innerText();
    await this.#removeBtn.click();
    return product;
}

async doContinueshopping()
{
    await this.#continueShoppintBtn.click();
    //navigating to inventory page
    return new InventoryPage(this.#page);
}

async doClickCheckout()
{
    await this.#checkoutBtn.click();
    //navigation to checkout page
    return new CheckoutPage(this.#page);

}









}