
import {test,expect} from "@playwright/test"


test("Automate complete web form",async({page})=>{

    //open application
    await page.goto("https://formy-project.herokuapp.com/form");

    //input element is enabled?? editable? visible?
     let fnameEle=page.getByPlaceholder("Enter first name");
     console.log("Element is displayed?: "+await fnameEle.isVisible());//true
     console.log("Element is enabled?: "+await fnameEle.isEnabled());//true
     console.log("Element is Editable?: "+await fnameEle.isEditable());//true
     
     if(await fnameEle.isVisible() && await fnameEle.isEditable())
     {
        await fnameEle.fill("Neha");
     }
     
     
     //last name
     await page.locator("#last-name").fill("Sharma");

     //job
     await page.getByPlaceholder("Enter your job title").fill("QA");

     //radio buttons
     let radioEle=page.locator("//input[@type='radio']");
        await radioEle.first().click();
        await radioEle.last().click();
        await radioEle.nth(1).click();

        //checkbox
        let checkboxEle=page.locator("//input[@type='checkbox']");

        await checkboxEle.first().check();
        await checkboxEle.nth(1).check();
        await checkboxEle.last().check();

        //scroll the page
     await page.evaluate(()=>{
        window.scrollTo(0,5000);
     })

        //drodpown example
        await page.locator("#select-menu").selectOption({label:"10+"});


        //03/17/2026
        //await page.locator("#datepicker").fill("12/17/2025");

await page.waitForTimeout(3000);



})