
//import {test,expect} from "@playwright/test"
import {test,expect} from "../fixtures/basefixture.js"
import { LoginPage } from "../pages/LoginPage"
import {InventoryPage} from "../pages/InventoryPage.js";


test("Test for login with valid credentials @login @smoke @regression",
    {annotation:[{type:'epic',description:'EP001:Design Login Page'},
        {type:'Feature',description:"Login Page Feature"},
        {type:'Story',description:"Us001:User can login with valid data"},
        {type:'Severity',description:"Blocker"},
        {type:'Onwer',description:"Priyanka Nigade"}
    ]},async({page})=>{


    let loginpage=new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.doLogin("standard_user","secret_sauce");
    await expect(page).toHaveURL(/inventory/);
    await page.waitForTimeout(2000);

})

test("Test login without username and password @login @smoke",async({page})=>{

    let loginpage=new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.doLogin("","");
    let messageloc=await loginpage.getWarningMessage();
    await expect(messageloc).toHaveText("Epic sadface: Username is required");
    await page.waitForTimeout(2000);

})

test("Test login with fixture @sanity",async({page,loginFixture})=>{
    console.log("fixture test completed");
    
  await page.waitForTimeout(2000);
})

test("Test login with Json data fixture @sanity",async({page,loginWithJson})=>{
await page.waitForTimeout(2000);

})



test("Test login with CSV data fixture @smoke",async({page,loginWithCsv})=>{
await page.waitForTimeout(2000);
})

test("Test with baseURL @flacky",async({page,loginWithBaseUrl})=>{

   await page.waitForTimeout(2000);
    
})