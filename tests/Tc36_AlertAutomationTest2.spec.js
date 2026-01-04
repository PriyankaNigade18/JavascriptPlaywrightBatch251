
import {test,expect} from "@playwright/test"

test("Test Simple alert",async({page})=>{

    //Manual trigger
page.on('dialog',async(alertBox)=>{

    console.log("Type is: "+alertBox.type());
    console.log("Alertmessage is: "+alertBox.message());
    //ok
    await alertBox.accept();
    
    
})

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.getByText("Click for JS Alert").click();
    //alert will automatically handle ok/cancel
    //validate
    let resultEle=page.locator("#result");
    expect(resultEle).toHaveText("You successfully clicked an alert");

    console.log("Alert handled!");
    
await page.waitForTimeout(2000);
})

test.only("Test Confirmation alert",async({page})=>{

    //Manual trigger
page.on('dialog',async(alertBox)=>{

    console.log("Type is: "+alertBox.type());
    console.log("Alertmessage is: "+alertBox.message());
    //ok
    //await alertBox.accept();
    //cancel
    await alertBox.dismiss();
    
    
})

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.getByText("Click for JS Confirm").click();
    //alert will automatically handle ok/ cancel button
    //validate
    let resultEle=page.locator("#result");
    expect(resultEle).toHaveText("You clicked: Cancel");

    console.log("Alert handled!");
    
await page.waitForTimeout(2000);
})