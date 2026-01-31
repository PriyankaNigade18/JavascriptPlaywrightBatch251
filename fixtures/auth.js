
import {test as base} from "@playwright/test"

 export const test=base.extend({

    crmLogin:async({page},use)=>{
        console.log("Before fixture is running.....");
        
    await page.getByPlaceholder("Enter email").fill("test@gmail.com");
    await page.getByPlaceholder("Password").fill("test123");
    await page.locator("#submit-id").click();
    await use(page)
    console.log("after fixture is running....");

    },
    
    

})
