


import {test as base} from "@playwright/test"

//Extends the test object by defining fixtures and/or options that can be used in the tests.
export const test=base.extend({

        login:async({page},use)=>{

                await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
                await page.locator("//input[@name='username']").fill("Admin");
                await page.locator("//input[@name='password']").fill("admin123");
                await page.locator("//button[@type='submit']").click();
            use(page)



    }






})