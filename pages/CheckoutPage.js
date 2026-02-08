import { OverviewPage } from "./OverviewPage";

export class CheckoutPage{

#page;
#fname;
#lname;
#zcode;
#contunueBtn;


constructor(page)
{
    this.#page=page;
    this.#fname=page.locator("#first-name");
    this.#lname=page.locator("#last-name");
    this.#zcode=page.locator("#postal-code");
    this.#contunueBtn=page.locator("#continue");
        
}

async doCheckout(fn,ln,zc)
{
    await this.#fname.fill(fn);
    await this.#lname.fill(ln);
    await this.#zcode.fill(zc);
    await this.#contunueBtn.click();
    //navigating to overview page
    return new OverviewPage(this.#page);

}






}