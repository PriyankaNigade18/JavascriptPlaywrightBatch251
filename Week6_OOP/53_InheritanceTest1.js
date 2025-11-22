
import {Car} from './52_InheritanceDemo.js'

//single level: Car is parent and BMW is child
class BMW extends Car
{
    autoEngine()
    {
        console.log("BMW......autoEngine()");
        
    }

    price()
    {
        console.log("BMW......50L");
        
    }
}


//object
//scenario1: create object of Parent class=parent properties
let c1=new Car();
c1.start();//individual method
c1.refule();//individual method
c1.stop();//individual method
c1.breakFeature();
c1.price();
//c1.autoEngine();//Error:using parent we cannot access parent properties

console.log("-------------");

//Scenario2: Create child class object = Parent + child properties
let b1=new BMW();
b1.start();//inherited method
b1.autoEngine();//individual method
b1.refule();//inherited method
b1.stop();//inherited method
b1.breakFeature();
b1.price();


console.log("--------------");

class Audi extends Car
{
    autoGear()
    {
        console.log("Audi......autoGear()");
        
    }
    price()
    {
        console.log("Audi.....70L");
        
    }
}

//object of parent
let c2=new Car();
c2.start();
c2.refule();
c2.stop();
console.log("-------------");


//object of child
let a1=new Audi();
a1.start();
a1.refule();
a1.autoGear();
a1.stop();
a1.breakFeature();
a1.price();







