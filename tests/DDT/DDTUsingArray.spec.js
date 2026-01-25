
import {test,expect} from "@playwright/test"

//array
let testData=[
    {id:"Tc001",email:"test1@gmail.com",password:"test123"},
    {id:"Tc002",email:"test2@gmail.com",password:"test123"},
    {id:"Tc003",email:"test3@gmail.com",password:"test123"}
]

for(let data of testData)
{

    test("Test for Login"+data.id,async({page})=>{

    await page.goto("https://automationplayground.com/crm/login.html");

    await page.locator("#email-id").fill(data.email);
    await page.locator("#password").fill(data.password);
    await page.locator("#submit-id").click();

    //assertion
    await expect(page).toHaveURL(/customers/);
    await page.waitForTimeout(2000);
})

}

 


