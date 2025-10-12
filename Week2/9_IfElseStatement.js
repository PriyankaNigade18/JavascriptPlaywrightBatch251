/*
Conditional Statements
------------------
1.Simple If
2.If/else
3.Ladder if
4.Nested if
5.SwitchCase

*/

//IfElse
console.log("-------------Example1-----------------");

//check number is positive or negative

let num=-80;

if(num>=0)
{
    console.log(num+" is Positive number");
    
}else
{
console.log(num+" is Negative number");

}
console.log("-------------Example2-----------------");

//check number is even or odd

let num1=89;

if(num1%2===0)
{
    console.log(num1+" is even number");
    
}else{
     console.log(num1+" is odd number");
}

console.log("-------------Example3-----------------");

//validate API status code 200

//succefull code 200 to 299
let statusCode=267;

if(statusCode>=200 && statusCode<=299)
{
    console.log("Test Pass!");
    
}else{
    console.log("Test Fail!");
    
}





