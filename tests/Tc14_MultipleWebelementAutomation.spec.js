
import {test,expect} from "@playwright/test"
import { log } from "node:console";

test("Test Multiple WebElement for Flipkart app",async({page})=>{

    await page.goto("https://www.flipkart.com/");

    
    //total Links from Flipkart 433---all():Locator[]
    let totalLinks=(await page.locator("a[href]").all()).length;
    console.log("Total Links are: "+totalLinks);

    //total images allInnerText():string[]
    let totalImages=(await page.locator("img[alt]").allInnerTexts()).length;
    console.log("Total Images are: "+totalImages);

    //get the text (innerText())and href(getAttribute(href)) value in console-all()
    let allLinks=await page.locator("a[href]").all();
    for(let link of allLinks)
    {
        console.log("Text is: "+await link.innerText());
        console.log("Href Attribute value: "+await link.getAttribute("href"));
        if((await link.innerText()).includes("Christmas Sale"))
        {
            console.log("Text is found...Test pass");
            break;
        }
        
        
    }
    console.log("--------------------------");
    //get the text (innerText())and href(getAttribute(href)) value in console-allInnerText()
    let allActiveLinks=await page.locator("a[href]").allInnerTexts();

    for(let link of allActiveLinks)
    {
        console.log("Text is: "+link);//inner text of link
        if(link.includes("Christmas Sale"))
        {
            console.log("Text is found...Test pass");
            break;
            
        }
        
    }


    await page.waitForTimeout(2000);
    
})
