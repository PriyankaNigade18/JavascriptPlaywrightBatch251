


let tools="Selenium,Postman,Appium,Cypress,Playwright";
console.log(tools);

//Split a string into substrings using the specified separator and return them as an array.
let arr=tools.split(',');

console.log(arr);

//iterate
for(let i of arr)
{
    console.log(i);
    
}

//single element from array
let singleTool=tools.split(',')[3];
console.log(singleTool);

console.log("----------");

let date="April 2026";
let month=date.split(" ")[0];       //['April','2026']
let year=date.split(" ")[1];

console.log("month is: "+month);
console.log("year is: "+year );

