
import {test,expect} from "@playwright/test"
import { link } from "node:fs/promises";

test("Test For IdentifyElement Techniques ",async({page})=>{

    //open application
    await page.goto("https://automationplayground.com/crm/");

    //Technique1: Identify element + Perform action
    //getByRole():link <a> Sign In </a>
    //await page.getByRole('link',{name:"Sign In"}).click();

    //Technique2: Identify element +store it into varible (validate) +perform action(POM)
   let linkEleLoc=page.getByRole("link",{name:"Sign In"});

    console.log("Is link visible?: "+await linkEleLoc.isVisible());//true

    //perform action on
    linkEleLoc.click();
    

    await page.waitForTimeout(2000);





})




test("Test For BuiltIn Locators ",async({page})=>{

    //open application
    await page.goto("https://automationplayground.com/crm/");

    //Technique1: Identify element + Perform action

    //getByRole():link <a> Sign In </a>
    //await page.getByRole('link',{name:"Sign In"}).click();

    //getByText(): element with text <a> visible text </a>
    await page.getByText("Sign In").click();

    //navigating to login page: page url should have login
    await expect(page).toHaveURL(/login/);

    //email ele: placeholder="Enter email" fill():Set a value to the input field.
    await page.getByPlaceholder("Enter email").fill("test@gmail.com");


    //password:placeholder="Password"
    await page.getByPlaceholder("Password").fill("test123");


    //getByLabel():click on checkbox : <label><input type="checkbox" id="remember">Remember me</label>
    await page.getByLabel("Remember me").click();//checkbox will check

    //submit button
    await page.getByRole("button",{name:"Submit"}).click();

   
    

    await page.waitForTimeout(2000);





})

test.only("Test for Built in locator getByAltText() and getByTestId()",async({page})=>{

    await page.goto("https://www.facebook.com/");

    //getByAltText(): <img alt=""/>
    //Highlight the corresponding element(s) on the screen. Useful for debugging, don't commit the code that uses
    await page.getByAltText("Facebook").highlight();

    //getByTestId():data-testid="royal-email"
    await page.getByTestId("royal-email").fill("test123@gmail.com");

    await page.waitForTimeout(2000);
 
})