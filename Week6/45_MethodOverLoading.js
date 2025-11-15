/*
What is Polymorphism:
--------------------
Where one thing we can reuse in multiple form is called Polymorphism

What is Purpose:
----------------------
Method Reusability

Real time example
-------------------
1.Payment Gateway
2.Login scenario
3.ola/uber

Types 
---------
1.Compile time(method Overloading)
2.Run time(method Overriding)

Note:
----------
Javascript is interpreter based language, so decision will be taken care
 at the time of run time only
Compilation phase we dont have in this laguage and because
 of this Js not support compile time polymorphism (Method overloading not supported)

Method Overloading
-=-----------
Method will be overloaded when method is declare in one class with same name
and different signature 

1.number of arguments
2.type of argument
3.change order of argument


 */

class TestMethod
{

    login()
    {
        console.log("default login....");
        
    }

    login(un,psw)
    {
        console.log("Login with username: "+un+" & password: "+psw);
        
    }

    login(un,psw,otp)
    {
        console.log("Login with username: "+un+" & password: "+psw+" & otp: "+otp);

    }
    login()
    {
        console.log("test login");
        
    }

}

//call
let t1=new TestMethod();
t1.login("priyanka","test123");

console.log("-----------------");

function logintest()
{
console.log("basic login.....");

}

// function logintest(un)//SyntaxError: Identifier 'logintest' has already been declared
// {
// console.log("login with username....");

// }//

logintest();
//logintest("Jay");
/*
design login for 3 functionality
deafult login
login un and password
login with un,password,otp
*/

//solution
function login()
{
    if(arguments.length===0)
    {
        console.log("Its default login.....");
        
    }
    else if(arguments.length===2)
    {
        console.log("user name is: "+arguments[0]);
        console.log("password is: "+arguments[1]);
        
        
    }else if(arguments.length===3)
    {
        console.log("user name is: "+arguments[0]);
        console.log("password is: "+arguments[1]);
        console.log("otp is: "+arguments[2]);
      
    }
}

login();//0
login("Jay","test123");//2
login("Poonam","test123",1233);//3

//Assignment: design payment() with different arguments

