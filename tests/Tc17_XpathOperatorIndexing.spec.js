
import {test,expect} from "@playwright/test"



test("Test Registration with xpath",async({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    //firstname: xpath with and operator
    await page.locator("//input[@name='firstname' and @class='form-control']").fill("Sneha");

    //lastname: xpath with or operator
    await page.locator("//input[@name='lastname' or @class='form-con']").fill("Pandit");

    let time=new Date().getTime();
    let email="sneha25"+time+"@gmail.com";
    console.log(email);
    console.log(typeof email);
    
    
    //email: xpath with indexing
    await page.locator("(//input[@class='form-control'])[3]").fill(email);

    //telephone: xpath with indexing
    await page.locator("(//input[@class='form-control'])[4]").fill("456777");

    //password: xpath with position()
    await page.locator("(//input[@class='form-control'])[position()=5]").fill("test123");

    //confirm password:xpath with position()
    await page.locator("(//input[@class='form-control'])[position()=6]").fill("test123");

    //yes radio button :xapth with indexing
    //await page.locator("(//input[@type='radio'])[2]").click();

    //first() last() nth(index):yes
    await page.locator("//input[@type='radio']").nth(1).click();

    //checkbox
    await page.locator("//input[@type='checkbox']").check();

    //continue button
    await page.locator("//input[@value='Continue']").click();

    //validate message Your Account Has Been Created!
    let message=await page.locator("//h1").last().innerText();

    //assert this message
     expect(message).toContain("Your Account Has Been Created!");

     expect(message).toEqual("Your Account Has Been Created!");


    await page.waitForTimeout(3000);


})