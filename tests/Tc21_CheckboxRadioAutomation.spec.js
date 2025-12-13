
import {test,expect} from "@playwright/test"


test("Test for Checkbox status",async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    /*
    first() last() nth(index)
    1st checkbox should be not checked
    2nd checkbox should be checked

    */
 let checkbox1=page.locator("//input[@type='checkbox']").first();

 //1st checkbox should be not checked
 await expect(checkbox1).not.toBeChecked();

    await checkbox1.check();


 // 2nd checkbox should be checked
 let checkbox2=page.locator("//input[@type='checkbox']").last();

 await expect(checkbox2).toBeChecked();

 await checkbox2.uncheck();


await page.waitForTimeout(2000);



})