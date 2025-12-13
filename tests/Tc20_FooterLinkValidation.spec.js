
import {test,expect} from '@playwright/test'
import { allowedNodeEnvironmentFlags } from 'process';

test("Automate footers link of Amazon application",async({page})=>{

await page.goto("https://www.amazon.in/");

let allOptions=await page.locator("//div[contains(@class,'navFooterLinkCol')]//ul//li//a").all();
console.log("Total Footer links are: "+allOptions.length);

for(let link of allOptions)
{
    console.log(await link.innerText());
    console.log(await link.getAttribute('href'));
    
    if((await link.innerText()).includes('Amazon App Download'))
    {
        console.log("Option is found....");
        
        await link.click();

        break;
    }
    
}



await page.waitForTimeout(2000);

})