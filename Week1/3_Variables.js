/*
Variable:
-----------
Variable is name of storage location where we can store data

Syntax:
------------
Keyword variableName=value;

examples:
------------
let id=101;
const pi=3.14;

Scope: Js support 3 scope 1.Global 2.functional(local) 3.Block scope

In js we use 3 keywords to declare variables
------------------------------
1.var(older and not recommended in Js)
-------------------------
-Scope: Global scope and Functional Scope
-Redeclaration is allowed

Modern Js
2.let(Mutable data)
-------------------
-Scope: Global + Block scope
-Redeclaration is not allowed
-to store mutable data

3.const(Immutable data)
----------------------------
-Scope: Global + Block scope
-Redeclaration is not allowed
-to store immutable data 


Functional:
inside function/method any variable is declared then it is functional scope

Block:
any variable declare inside any block (if,for,{})

*/


console.log("-------Global scope--------");

var userName="Hiteshi";
let address="US";
const email="hiteshi@gmail.com";

console.log("User name is: "+userName);
console.log("Address is: "+address);
console.log("Email id is: "+email);

console.log("-----Calling global scope data using function-----");

function display()
{
console.log("User name is: "+userName);
console.log("Address is: "+address);
console.log("Email id is: "+email);
}


//call
display();







