
import {test,expect} from "@playwright/test"
import {scrollUpToElement} from "./Generic/Utility.js"

test("Test for Dynamic Table",async({page})=>{

    //open application
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //scroll the page upto the dynamic table
    let ele=page.locator("//h2[text()='Dynamic Web Table']");

    await scrollUpToElement(ele);

    console.log("-----all headings _ count number of columns--------");
    let allHeadings=await page.locator("//table[@id='taskTable']//tr[1]//th").allInnerTexts();
    console.log("Total Columns are: "+allHeadings.length);//5

    for(let heading of allHeadings)
    {
        console.log(heading);
        
    }
    
    console.log("------------------------");
    
    /*
     * Specific column data
     */
    
    let cellNumber=0;
    for(let heading of allHeadings)
    {
        cellNumber++;
        if(heading.includes("Name"))
        {
            //get the column number
            console.log("Expected heading found at column : "+cellNumber);
            //get the data for same column
            let cellData=await page.locator("//table[@id='taskTable']//tr//td["+cellNumber+"]").allInnerTexts();
            for(let row of cellData)
            {
                console.log(row);
                
            }
            
            
        }

    }
    console.log("------------------------");

        
    /*
     * look for Name column and find Chrome then get the data for chrome row
     */
    let cellN=0;
    for(let heading of allHeadings)
    {
        cellN++;
        if(heading.includes("Name"))
        {
            //get the column number
            console.log("Expected heading found at column : "+cellN);
            //get the data for same column
            let cellData=await page.locator("//table[@id='taskTable']//tr//td["+cellN+"]").allInnerTexts();
            let rownumber=0
            for(let data of cellData)
            {
                rownumber++;
              if(data.includes("Chrome"))
              {
                console.log("Expected Data found at row number: "+rownumber);
                let rowData=await page.locator("//table[@id='taskTable']//tr["+rownumber+"]//td").allInnerTexts();
                console.log(rowData);

                //Uase Case: CPU load of Chrome process: dynamic
                //first get the table data
                let expCpuLoad=await page.locator("//table[@id='taskTable']//tr["+rownumber+"]//td[contains(text(),'%')]").innerText();
                let actCpuLoad=await page.locator("//strong[@class='chrome-cpu']").innerText();

                console.log("EXpected Load is: "+expCpuLoad);
                console.log("Actual Load is: "+actCpuLoad);
                
                
                if(actCpuLoad.includes(expCpuLoad))
                {
                    console.log("CPU load match ....Test Pass!");
                    
                }else{
                    console.log("CPU load not matched...Test Fail!");
                    
                }
              }
                
            }
            
            
        }
    }



await page.waitForTimeout(3000);
})