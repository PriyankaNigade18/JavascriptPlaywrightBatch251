
import {test,expect} from "@playwright/test"


test("Test for Login using xpath",async({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //email id
    await page.locator("//input[@id='input-email']").fill("test2525@gmail.com");

    //how to get that entered value
    let emailValue=await page.locator("//input[@id='input-email']").inputValue();
      
    //assertion
    await expect(page.locator("//input[@id='input-email']")).toHaveValue(emailValue);
    console.log("Email Id Is: "+emailValue);


    //enter password
    await page.locator("//input[@type='password']").fill("test123");

    //click on login button
    await page.locator("//input[@value='Login']").click();

    //assertion on page navigation (url)
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/account");
    await expect(page).toHaveURL(/account/);

    //get the MyAccount header in console
    let header1=await page.locator("(//h2)[1]").innerText();
    console.log("Header is: "+header1);

    await page.waitForTimeout(2000);

})