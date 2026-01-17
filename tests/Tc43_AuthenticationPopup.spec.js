
import {test,expect} from "@playwright/test"


//https://username:password@domain/
test("Automate Authentication Popup",async({page})=>{

    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth",{waitUntil:"load"});

    let textLoc= page.locator("p");
    await expect(textLoc).toHaveText("Congratulations! You must have the proper credentials.");
    console.log("Text is: "+await textLoc.innerText());
    

    await page.waitForTimeout(2000);
})

test.only("Automate Authentication Popup with special password admin123",async({browser})=>{

    //new context
    const context=await browser.newContext({httpCredentials:{
                                                username:"admin",
                                                password:"admin"
                                            }});
    //new pag
    const page=await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth",{waitUntil:"load"});

    await page.waitForSelector("p");
    let textLoc= page.locator("p");
    await expect(textLoc).toHaveText("Congratulations! You must have the proper credentials.");
    console.log("Text is: "+await textLoc.innerText());
    

    await page.waitForTimeout(2000);
})