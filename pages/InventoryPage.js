import { CartPage } from "./CartPage";

export class InventoryPage{

#page;
#allProduct;
#addToCartBtn;
#cartIcon;


constructor(page)
{
    this.#page=page;
    this.#allProduct=page.locator("div.inventory_list .inventory_item_name");
    this.#addToCartBtn=page.locator("//button[text()='Add to cart']");
    this.#cartIcon=page.locator(".shopping_cart_link");

}

async getTotalProductCount()
{
    let products=await this.#allProduct.all();
    return await products.length;
}

async getProductDetails()
{
    let products=await this.#allProduct.all();
    for(let i of products)
    {
        console.log(await i.innerText());
        
    }

}

async addProductIntoCart(pname)
{
    let products=await this.#allProduct.all();
    for(let i of products)//6
    {
        if((await i.innerText()).includes(pname))
        {
            //click on that product
            await i.click();
            break;

        }
    }

    //click on add to cart button
    await this.#addToCartBtn.click();
    console.log("Product added into cart: "+pname);
    

}


async gotoCartPage()
{
    await this.#cartIcon.click();
    //navigating to cart page
    return new CartPage(this.#page);
}



}

