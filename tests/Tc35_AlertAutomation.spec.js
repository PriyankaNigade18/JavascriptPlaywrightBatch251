
import {test,expect} from "@playwright/test"

test("Handle rediffmail alert..Autodismiss by playwright",async({page})=>{

    //open application
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    //click on login button
    await page.getByRole("button",{name:"Log In"}).click();

    //alert will open and autodismissed by playwright

    //enter email
    await page.locator("#login1").fill("test1234");


await page.waitForTimeout(2000);
})

test.only("Manually trigger rediffmail alert to handle it",async({page})=>{

    //listener(events)
    page.on("dialog",async(alertbox)=>{
        console.log("This is alert type: "+alertbox.type());
        console.log("Alert message is: "+alertbox.message());
        
        //click on OK
        await alertbox.accept();
   })

    //open application
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
    
    //click on login button
    await page.getByRole("button",{name:"Log In"}).click();

    //alert will open 

    //enter email
    await page.locator("#login1").fill("test1234");


await page.waitForTimeout(2000);
})