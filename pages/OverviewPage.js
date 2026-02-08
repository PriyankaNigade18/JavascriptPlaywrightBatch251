
export class OverviewPage{

    #page;
    #paymentDetails;
    #finishBtn;
    #successMsg;

    constructor(page)
    {
        this.#page=page;
        this.#paymentDetails=page.locator("div.summary_info div[class^='summary']");
        this.#finishBtn=page.locator("#finish");
        this.#successMsg=page.locator("h2.complete-header");

    }


    async getPaymentDetails()
    {
       let data=await this.#paymentDetails.all();
       for(let i of data)
       {
        console.log(await i.innerText());
        
       }
    }


    async doCompleteProcess()
    {
        await this.#finishBtn.click();
        return await this.#successMsg.innerText();

    }


}