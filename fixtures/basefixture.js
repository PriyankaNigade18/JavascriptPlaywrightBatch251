
import {test as base,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import {readJson} from "../utilities/ReadJson.js"
import { readCSV } from "../utilities/ReadCsv.js";


export const test=base.extend({

    loginFixture:async({page},use)=>{

        const loginpage=new LoginPage(page);
        await loginpage.gotoLoginPage();
        await loginpage.doLogin("standard_user","secret_sauce");
        await use(loginpage);



    },
    loginWithJson:async({page},use)=>{
    console.log("Data reading from Json file....");
        
    const data=readJson("./testData/auth.json");
    const loginpage=new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.fillUsername(data.username);
    await loginpage.fillPassword(data.password);
    await loginpage.clickLoginButton();
    await use(loginpage);

    },
    loginWithCsv:async({page},use)=>{
    console.log("Data reading from CSV file....");
        
    const data=readCSV("./testData/Data.csv");
    const loginpage=new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.fillUsername(data[0].username);
    await loginpage.fillPassword(data[0].password);
    await loginpage.clickLoginButton();
    await use(loginpage);

    },
    loginWithBaseUrl:async({page,baseURL},use)=>{
         const loginpage=new LoginPage(page);
         await loginpage.openApp(baseURL);
         await use(loginpage);
    },

page:async({page},use,testInfo)=>{

    await use(page);
    //after every test case
    //only for failure I want screenshot
    if(testInfo.status!=testInfo.expectedStatus)
    {
        const path=await page.screenshot({path:`screenshots/${testInfo.title}.png`});
        await testInfo.attach('screenshot',{ body: path, contentType: 'image/png' })
    }
}




})

export {expect}