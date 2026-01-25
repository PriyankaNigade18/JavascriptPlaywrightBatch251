import {test,expect} from "@playwright/test"
import XLSX, { read } from "xlsx"

function readExcel(filepath,sheetname)
{
//load the workbook
const workbook=XLSX.readFile(filepath);

//workbook--->sheet
const worksheet=workbook.Sheets[sheetname];

//read entire data: Converts a worksheet object to an array of JSON objects
let data=XLSX.utils.sheet_to_json(worksheet);

return data;
}


//call

let testdata=readExcel("./TestData/Exceldata.xlsx","UserData");

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