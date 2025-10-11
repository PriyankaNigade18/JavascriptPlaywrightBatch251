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

console.log("--------block scope variable--------");

if(true)
{
    const browserVsersion=140;
    let browserName="Chrome";
    console.log("-----Calling variables inside block----");
    console.log("Browser name is: "+browserName);
    console.log("Borwser Version is: "+browserVsersion);
     
}

console.log("-----Calling variables outside block----");
    //console.log("Browser name is: "+browserName);//ReferenceError: browserName is not defined
    //console.log("Borwser Version is: "+browserVsersion);//ReferenceError: browserVsersion is not defined

console.log("------Function Scope Variable------");

function test1()
{
    var stdName="Kiran";
    let subName="Testing";
    const CName="AISSPMS";
    console.log("-------Variables calling in function scope-(local)----");
console.log("student Name is:  "+stdName);
console.log("Subject Name is: "+subName);
console.log("College Name is: "+CName);
 
}

//call the function
test1();


console.log("-------Variables calling outside function scope-(local)----");
//console.log("Student name is:  "+stdName);//ReferenceError: stdName is not defined
//console.log("Subject Name is: "+subName);//ReferenceError: stdName is not defined
//console.log("College Name is: "+CName);//ReferenceError: stdName is not defined


console.log("-------------------------Redeclaration------------------------");

/*
Redeclaration is allowed for var but not for let and const type
Reassignment allowed for var and let not for const
*/

var toolName="Selenium";
console.log("ToolName is : "+toolName);//Selenium
var toolName="Playwright";//redeclaration
toolName="Appium";//reassignment
console.log("ToolName is : "+toolName);//Appium


let frameworkName="Mocha";
//Cannot redeclare block-scoped variable 'frameworkName'.
//let frameworkName="Mocha";//SyntaxError: Identifier 'frameworkName' has already been declared

frameworkName="JsFramework";//reassignment
console.log("Framework name is: "+frameworkName);

console.log("----const------");

const pi=3.14;
pi=9.67;//TypeError: Assignment to constant variable.
console.log(pi);
//Cannot redeclare block-scoped variable 'pi'.
//const pi=3.14;//syntax error



