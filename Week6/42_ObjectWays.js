/*
Object is collection of Key and values pair in Js

Every key is by default String and value could be anything

Ways Of Creating Object
--------------------------
1.Object Literal
2.Using class(ES6)
3.Using constructor function
4.Prototype based object(older)
*/

console.log("-------Object literal-------");

let person={
    isEmployee:true,
    salary:898999,
    address:"Mumbai",

    print:function()
    {
        console.log(this.isEmployee);
        console.log(this.salary);
        console.log(this.address);
              
    }
}

console.log(person.salary);

person.print();


console.log("------------Class level--------");

class Fruits
{
    constructor(name,price)
    {
        this.fname=name;
        this.fprice=price;
    }

    getDetails()
    {
        console.log("Fruit name is: "+this.fname);
        console.log("Fruit price is: "+this.fprice);
        
        
    }
}

let f1=new Fruits("Apple",350);
f1.getDetails();

console.log("------constructor function----------");

function Employee(id,name)
{
    this.eid=id;
    this.ename=name;
    this.print=function()
    {
        console.log("Print the employee data: "+this.eid);
        
    }
}

let e1=new Employee(111,"Swati");
console.log(e1.eid);
console.log(e1.ename);
e1.print();

console.log("-----------Prototype based object-----");
//literal object

let userData={
    fname:"Praneet",
    uid:111,

    print:function()
    {
        console.log("User name is: "+this.fname);
        console.log("User id is: "+this.uid);
              
    }
}

userData.print();
//Creates an object that has the specified prototype or that has null prototype.
//to create prototype based object
let u1=Object.create(userData);
u1.print();
console.log(u1.fname);
