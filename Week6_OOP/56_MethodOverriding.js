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

Run time polymorphism(Method Overriding)
-------------------------------------------
Run time polymorphism is possible when two class in Is-A relation
and both the classes should have same name method with same signature
then Parent class method overrided by child class 
child class object : Parent + child (updated result)

 */

class A 
{
color()
{
    console.log("Red");
    
}
}


class B extends A
{
    color()
{
    console.log("Blue");
    
}

}

//object
let a1=new A();
a1.color();//Red

let b1=new B();
b1.color();//Blue

