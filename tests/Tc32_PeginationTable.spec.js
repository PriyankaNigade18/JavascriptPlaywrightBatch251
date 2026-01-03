
import {test,expect} from "@playwright/test"
import {scrollUpToElement} from "./Generic/Utility.js"

test("Test for Dynamic Table",async({page})=>{

    //open application
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //scroll the page upto the dynamic table
    let ele=page.locator("//h2[text()='Pagination Web Table']");

    await scrollUpToElement(ele);

    //calculate total pages
    let allPages=await page.locator("//ul[@id='pagination']//li//a").all();
    console.log("Total Pages are: "+allPages.length);//4

    for(let p of allPages)
    {
        console.log("Page Number: "+await p.innerText());//["1","2","3","4"]
        //click on page number3
        if((await p.innerText()).includes("3") )
        {
            console.log("Page found!");
           let rows= (await page.locator("//table[@id='productTable']//tbody//tr").all()).length;
           console.log("Total rows: "+rows);//5
           
            //click
            await p.click();
            break;

        }
        
    }
    


    console.log("---------------------------------");
    
//scenario2: get the total row count for all pages

    let total=0;
    for(let p of allPages)
    {
        //open page
        p.click();
        //get the total rows
        let rowCount=(await page.locator("//table[@id='productTable']//tbody//tr").all()).length;
        total=total+rowCount;
    }

    console.log("Total count of rows including all pages are: "+total);//20
    

console.log("------------------------------");

//scenario:Dynamic(page numbers not known/data) iterate every page and check for Fitness Tracker data if found check the checkbox 
//and if not found the close pegination with appropriate message

for(let p of allPages)
{
    await p.click();
    let isEleExist=await page.locator("//table[@id='productTable']//tbody//tr//td[text()='Tracker']").isVisible();
if(isEleExist)
{
    console.log("Element is found at PageNumber: "+await p.innerText());
    await page.locator("//table[@id='productTable']//tbody//tr//td[text()='Tracker']//following-sibling::td/input").check();
    await page.waitForTimeout(2000);
    break;
    
}
   
//console.log("Pegination Over and Expected element not found!");
}
 








    await page.waitForTimeout(2000);

})
