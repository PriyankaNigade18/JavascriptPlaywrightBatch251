

import {test,expect} from "@playwright/test"

test("Automate Disable Element",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    let inputElement=page.getByPlaceholder("Enabled/Disabled Field");

    //current status
    console.log("Input Box current status IsEnabled? "+await inputElement.isEnabled());//true
    
    console.log("Input Box current status Isdisabled? "+ await inputElement.isDisabled());//false

    //click on Disable button
    await page.locator("#disabled-button").click();

    console.log("Input Box status After Click on Disable button Isdisabled? "+ await inputElement.isDisabled());

    //type 
    await page.evaluate(()=>{
        document.querySelector("#enabled-example-input").value="Hello All";
    })

    await page.waitForTimeout(2000);
})