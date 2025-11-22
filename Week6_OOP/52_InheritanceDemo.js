/*

Inheritance
-----------------
To acquire properties of one class into another class we use inheritance

Purpose
------------
To avoid code duplication
For Reusability
To achieve Run time polymorphism

classes will be in IS-A relation with extends keyword

Parent class can access only parent property
Child class can access Parent + child property

3 types we can able to implement
-----------------------
1.single level
2.Multi Level
3.Heirarchical

*/

import { Vehical } from "./54_InheritanceTest2.js";


class Car extends Vehical
{

start()
{
    console.log("Car.....start()");
    
}

refule()
{
    console.log("Car.....refule()");
    
}

stop()
{
    console.log("Car.....stop()");
    
}

price()
{
    console.log("Car...1L");
    
}


}


export {Car}

