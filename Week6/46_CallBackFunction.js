/*
Call back function or Higher order function
===============================================

when any function is passed as parameter to other function then this is called 
call back function or higher order function

*/



function getName(name)//passing one parameter (variable)
{
console.log("Hello "+name);

}

//main function
function greet(callbackfun,username)//passing 2 parameter one is function and other is variable
{
callbackfun(username);
}

greet(getName,'Praneeth');

console.log("----------------------------------");

function add(a,b)
{
    console.log("Addition : "+(a+b));
    
}

function sub(a,b)
{
    console.log("Subtraction : "+(a-b));
    
}

function mul(a,b)
{
    console.log("Multiplication: "+(a*b));
    
}

function div(a,b)
{
    console.log("Division : "+(a/b));
    
}

function mod(a,b)
{
    console.log("Modulus : "+(a%b));
    
}


function calculate(fun,n1,n2)
{
    fun(n1,n2);

}


//calling
calculate(add,100,200);
calculate(mul,10,20);
calculate(sub,100,20);













