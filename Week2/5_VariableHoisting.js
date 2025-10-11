/*
Interview
--------------
What is Hoisting in Js?
-----------------------------
Hoisting is behaviour of Js programming language where
 before declaration and initialization 
we can access data/function

Rule:
-----------
For var and function declaration always hoisted

For let and const even for Anonymous function and arrow function are not hoisted

*/

//before declaration
console.log("UserName is: "+userName);//undefined

var userName="Abhiram";

//after declaration
console.log("UserName is: "+userName);//Abhiram

console.log("-------hoisting for let/const---------");
/*
Starting from variable declaration to assingment the area or time period 
we called temporal dead zone
In js let and const (function expression )
 always in TDZ
*/
//ReferenceError: Cannot access 'langauage' before initialization
//console.log("Language is: "+langauage);//Refrence error
let langauage="Java";
console.log("Language is: "+langauage);//java

//console.log("Pi value is: "+pi);//ReferenceError: Cannot access 'langauage' before initialization
const pi=3.14;
console.log("Pi value is: "+pi);//3.14

console.log("--------Hoisting for Function---------");

/*
Function declaration are always hoited but not modern function
1. Anonymous function...error
2.Arrow function ....error
*/

test1();


//function declaration
function test1()
{
    console.log("Function declaration is calling.....");
    
}


test1();

console.log("------modern function------");


   //call
    //test2();//ReferenceError: Cannot access 'test2' before initialization

//Anonymous function
let test2=function()
            {
                    console.log("Anonymous function is calling....");
                    
            }


            //call
            test2();


    //arrow function
    
    //test3();//ReferenceError: Cannot access 'test3' before initialization

    let test3=()=>{
                console.log("Arrow function is calling....");
                
                }

            //call
            test3();

            console.log(stdName);
            let stdName;
            console.log(stdName);
            