
import {test,expect} from "@playwright/test"

test("Test for cssSelector with index",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    //total 13 links
    let totalLinks=(await page.locator("aside a").all()).length;
    console.log("Total Links are: "+totalLinks);//13

    //get the only Forgotten Password 3rd element from 13 elements: indexing from css
    let element=page.locator("aside a:nth-child(3)");
    //highlight
    element.highlight();

    await page.waitForTimeout(2000);

    element.click();


    await page.waitForTimeout(2000);
    
})