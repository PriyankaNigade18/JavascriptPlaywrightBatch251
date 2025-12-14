
import {test,expect} from "@playwright/test"

test("Automate redbus dropdown",async({page})=>{

    await page.goto("https://www.redbus.in/");

let fromDropdown=page.locator("#srcinput");

await fromDropdown.fill("Pune");

await page.waitForTimeout(1000);
//alloptions
let allOptions=await page.locator("(//div[contains(@class,'searchCategory')])[1]//div[@role='heading']").all();

console.log("Total Suggestions are: "+allOptions.length);
for(let option of allOptions)
{
    console.log(await option.innerText());
    if((await option.innerText()).includes("Viman Nagar, Pune"))
    {
        option.click();
        break;
    }
    
}

await page.waitForTimeout(2000);

})