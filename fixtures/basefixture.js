
import {test as base,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";


export const test=base.extend({

    loginFixture:async({page},use)=>{

        const loginpage=new LoginPage(page);
        await loginpage.gotoLoginPage();
        await loginpage.doLogin("standard_user","secret_sauce");
        await use(loginpage);



    }




})

export {expect}