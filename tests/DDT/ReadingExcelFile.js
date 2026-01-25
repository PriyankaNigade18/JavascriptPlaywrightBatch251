

import XLSX from "xlsx"

//load the workbook
const workbook=XLSX.readFile("./TestData/Exceldata.xlsx");

//workbook--->sheet
const worksheet=workbook.Sheets["UserData"];
/*
//To read single entry
let data=worksheet['C2'];

console.log(data);

console.log(data.v);
*/

//read a complete row
let arrayOfObject=XLSX.utils.sheet_to_json(worksheet);

console.log(arrayOfObject);


console.log(arrayOfObject[2]);


