
import {test,expect} from "@playwright/test"


test("Automate Static WebTable",async({page})=>{

//open application
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

//scroll the page up to element
await page.locator("//h2[text()='Static Web Table']").scrollIntoViewIfNeeded();

console.log("----total number of rows--------");
let totalRows=await page.locator("//table[@name='BookTable']//tbody//tr").all();
console.log("Total Rows are: "+totalRows.length);//7

console.log("----total number of columns--------");
let allHeading=await page.locator("//table[@name='BookTable']//tbody//tr[1]//th").allInnerTexts();
console.log("Total Columns are: "+allHeading.length);//4

console.log("----print headers of the table--------");

console.log(allHeading);

// for(let ele of allHeading)
// {
//     console.log(ele);
    
// }

console.log("-----print specific row number 5-----");

let rowData=await page.locator("//table[@name='BookTable']//tbody//tr[5]/td").allInnerTexts();
console.log(rowData);

console.log("-----print specific columns number 3-----");

let allCellData=await page.locator("//table[@name='BookTable']//tbody//tr//td[3]").allInnerTexts();
console.log(allCellData);


console.log("----Print table data----");
let allData=await page.locator("//table[@name='BookTable']//tbody//tr//td").allInnerTexts();
console.log(allData);

//Scenario: For Book Master In Selenium get the current price and compare it should be 3000
console.log("=======================");

let cellNumber=0;
for(let heading of allHeading)
{
    cellNumber++;
    if(heading.includes("BookName"))
    {
        console.log("Expected Column founds at number: "+cellNumber);
        let allBooks=await page.locator("//table[@name='BookTable']//tbody//tr//td["+cellNumber+"]").allInnerTexts();
        let rowcount=0;
        for(let book of allBooks)
        { rowcount++;
            if(book.includes("Master In Selenium"))
            {
                console.log("Expected book founds at row: "+rowcount);
                let priceData=await page.locator("//table[@name='BookTable']//tbody//td[text()='Master In Selenium']//following-sibling::td[3]").innerText();
                //string to Number "3000"---->3000
                let price=Number(priceData);
                if(price===3000)
                {
                    console.log("Test Pass...Price matched!");
                    
                }
            }
        }
    }
}

await page.waitForTimeout(2000);

})