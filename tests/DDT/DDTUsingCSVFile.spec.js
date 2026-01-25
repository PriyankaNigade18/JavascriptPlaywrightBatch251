/*
   header:true
   ------------
   If true, the first row of parsed data will be interpreted as field names.

   skipEmptyLines:true
   ------------------
   If true, lines that are completely empty (those which evaluate to an empty string) will be skipped

   dynamicTyping:false
   ---------------------
   If true, numeric and boolean data will be converted to their type instead of remaining strings
   */


import {test,expect} from "@playwright/test"
import Papa from 'papaparse'
//file operation
import fs from 'fs'

//from csv file
function readCsv()
{
    //file path to read file
   let fileData=fs.readFileSync("./TestData/CsvFile.csv","utf-8");
  
    //parse that file
    let parsedData=Papa.parse(fileData,{header:true,skipEmptyLines:true,dynamicTyping:false});

    return parsedData.data;
}

//calling function
let testdata=readCsv();


for(let data of testdata)
{
test("Test for Login"+data.id,async({page})=>{

    await page.goto("https://automationplayground.com/crm/login.html");

    await page.locator("#email-id").fill(data.email);
    await page.locator("#password").fill(data.password);
    await page.locator("#submit-id").click();

    //assertion
    await expect(page).toHaveURL(/customers/);
    await page.waitForTimeout(2000);
})

}