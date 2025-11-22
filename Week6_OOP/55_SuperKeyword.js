


/*
Super Keyword:
===================
To access properties form immediate parent class we use Super keyword
-first Using super keyword we can call method
-At the time any variable call first call that variable in class using this keyword
then call it in child class using super(getter method)
- in js both the class conatins construtor then add super() into child class
constcrutor then it will call Parent class constcrutor and then child class constructor

*/
class Parent
{
    pid=101;


    constructor()
    {
        console.log("Parent constructor is calling....");
        
    }
    parentIncome()
    {
        
        
        console.log("Parent Income is: $6000");
        
    }

    getPid()
    {
        console.log(this.pid);
        
    }


}


class Child extends Parent
{

cid=201;

constructor()
{
    super();
    console.log("Child class Constructor is calling....");
    
}

childIncome()
{
    //console.log("Parent Id is: "+super.pid);//undefined
    //console.log(super.pid);//undefined
    super.parentIncome();
    super.getPid();
    console.log("child Id: "+this.cid);
    
    console.log("child Income is: $10000");
    
}


}

//Objects
//scenario1: Parent class object
/*
let p1=new Parent();
p1.parentIncome();
console.log(p1.pid);
*/
console.log("-----------------------");

//Scenario2: child class object
let c1=new Child();
c1.childIncome();
