
import {test,expect} from "@playwright/test"

test.only("test for hard assertion",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //assertions on page title or url
    await expect(page).toHaveTitle("Account Login");//full match
    console.log("Page title matched!");

    //partial match
    await expect(page).toHaveTitle(/Login/);
    console.log("Page title matched!");

    //full match
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Url matched!");
    
    //partial match
    await expect(page).toHaveURL(/tutorialsninja/);
    console.log("Url matched!");

    //webelement assertion
    let emailId=page.locator("#input-email");
    //visibility,editability,enabled
    await expect(emailId).toBeVisible();
    await expect(emailId).toBeEnabled();
    await expect(emailId).toBeEditable();

    if(await emailId.isVisible() && await emailId.isEditable() && await emailId.isEnabled())
    {
        //action
        await emailId.fill("test2525@gmail.com");

    }
    //assert inserted value
    await expect(emailId).toHaveValue("test2525@gmail.com");

    //assert any attribute
    await expect(emailId).toHaveAttribute("name","email");

    //assert for cssvalue
    await expect(emailId).toHaveCSS('height','34px');


    //test for footer
    let allFooterLinks=page.locator("//footer//a");
    //Ensures the Locator resolves to an exact number of DOM nodes.
    await expect(allFooterLinks).toHaveCount(16);
    console.log("Total count is "+(await allFooterLinks.all()).length);//16
    
    //toHaveText()

    let header1=page.locator("//h2").first();
    await expect(header1).toHaveText("New Customer");

    let header2=page.locator("//h2").last();
    await expect(header2).toHaveText("Returning Customer");

    //checkbox assertion
    /*
    checkbox should be checked/ not checked

    */
   await page.locator("//a[text()='Register']").last().click();
   //navigating to next page (register page)
   await page.waitForURL(/register/);

   //checkbox should be unchecked or not checked
   let checkbox=page.locator("input[name='agree']");
   await expect(checkbox).not.toBeChecked();

   //checked
   await checkbox.check();

   //it should be checked
   await expect(checkbox).toBeChecked();

   /*
   First time screenshot get captured and store and test will fail
   Second time just execute it will again capture screenshot and compare 
   with previous one then you will get pass result
   */
   await expect(page).toHaveScreenshot();

    await page.waitForTimeout(2000);
})


test("test for Soft assertion",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //assertions on page title or url
    await expect.soft(page).toHaveTitle("Account Login123");//full match
    console.log("Page title matched!");

    //partial match
    await expect.soft(page).toHaveTitle(/Login/);
    console.log("Page title matched!");

    //full match
    await expect.soft(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    console.log("Url matched!");
    
    //partial match
    await expect.soft(page).toHaveURL(/tutorialsninja/);
    console.log("Url matched!");

    //webelement assertion
    let emailId=page.locator("#input-email");
    //visibility,editability,enabled
    await expect.soft(emailId).toBeVisible();
    await expect.soft(emailId).toBeEnabled();
    await expect.soft(emailId).toBeEditable();


    await page.waitForTimeout(2000);
})