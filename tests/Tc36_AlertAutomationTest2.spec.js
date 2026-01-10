
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

test("Test Confirmation alert",async({page})=>{

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


test("Test for confirmation alert",async({page})=>{

    //add listener
    page.on('dialog',async(alertBox)=>{

        console.log("Alert type is: "+alertBox.type());
        console.log("Alert message is: "+alertBox.message());

        //prompt alert==>accept('prompt')
        await alertBox.accept("Hello");
        
        
    })


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    //click on button
    await page.getByText("Click for JS Prompt").click();
    //alert will open 

    //validate
    let resultEle=page.locator("#result");
    await expect(resultEle).toHaveText("You entered: Hello");

    console.log("Prompt Alert handled!");

    //static wait
    await page.waitForTimeout(2000);
    
})


test.only("Handle Alert automatically by listener",async({page})=>{


    page.on('dialog',async(alert)=>{

        if(alert.type().includes('alert'))
        {
            console.log("Simple alert automation");
            
            console.log("Alert type is: "+alert.type());
            console.log("Alert message is: "+alert.message());
            
            //Ok
            await alert.accept();
            

        }else if(alert.type().includes("confirm"))
        {
            console.log("Confirmation alert automation");
            
            console.log("Alert type is: "+alert.type());
            console.log("Alert message is: "+alert.message());
            
            //Cancel
            await alert.dismiss();
            

        }else if(alert.type().includes("prompt"))
        {
            console.log("Prompt alert automation");
            
            console.log("Alert type is: "+alert.type());
            console.log("Alert message is: "+alert.message());
            
            //Ok
            await alert.accept("Hello");
            

        }
    })


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    let result=page.locator("#result");
     await page.getByText("Click for JS Alert").click();
     await expect(result).toHaveText("You successfully clicked an alert");

     await page.waitForTimeout(1000);
     await page.getByText("Click for JS Confirm").click();
    await expect(result).toHaveText("You clicked: Cancel");
    
    await page.waitForTimeout(1000);
     await page.getByText("Click for JS Prompt").click();
     await expect(result).toHaveText("You entered: Hello");

    await page.waitForTimeout(3000);
})