/*
Conditional Statements
------------------
1.Simple If
2.If/else
3.Ladder if
4.Nested if
5.SwitchCase

*/

console.log("-------------SwitchCase example1----------");

let a=100,b=20;
let operator="*";

switch(operator)
{
    case "+":
        console.log("Its Addition: "+(a+b));
        break;
    case "-":
        console.log("Its Subtraction: "+(a-b));
        break;
    case "*":
        console.log("Its Multiplication: "+(a*b));
        break;
    case "/":
        console.log("Its Division: "+(a/b));
        break;
deafult:
console.log("Wrong Operator!");


        
}


console.log("-------------SwitchCase example2----------");

let env="Stage";

switch(env.toLowerCase())
{
case "dev":
    console.log("Test case is executing in Development environment");
    break;
case "qa":
    console.log("Test case is executing in Testing environment");
    break;
case "stage":
    console.log("Test case is executing in Stage environment");
    break;
case "prod":
    console.log("Test case is executing in Production environment");
    break;

default:
    console.log("Invalid Environment");
    
    
}







