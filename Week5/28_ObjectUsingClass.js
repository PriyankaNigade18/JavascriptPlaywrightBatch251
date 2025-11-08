
/*
Class is a template or blueprint where we can describe 
properties of object

class name should be start with capital latter

Objects we can create using new keyword
Object will be initialize using constructor

constructor is special function who is repsonsible
to initialize object.
constructor always get called at the time of object creation
In Js only one constructor is allowed

this keyword used to call current class ref(variable/methods)
this keyword refer current class
*/

class StudentData
{
   
    constructor(fname,id,address,subject,marks)
    {
        //class level variable
        this.sname=fname;
        this.sid=id;
        this.saddress=address;
        this.ssubject=subject;
        this.smarks=marks;
    }
    /*
//SyntaxError: A class may only have one constructor
    constructor(fname,id)
    { 
        this.sname=fname;
        this.sid=id;

    }
    */

}
//Object
let s1=new StudentData("Pooja",101,'nashik','testing',98.77);
console.log(s1.sname);
console.log(s1.saddress);
console.log(s1);
console.log(typeof s1);

console.log("----------------");

let s2=new StudentData("Sameer",201,'pune','maths',78.66);
console.log(s2.sname);
console.log(s2.saddress);
console.log(s2);

console.log("----------------");
let s3=new StudentData();
console.log(s3);

console.log("----------------");
let s4=new StudentData("Smita",301);
console.log(s4.sname);
console.log(s4.sid);
console.log(s4.saddress);
console.log(s4);

console.log("---------no reference object-------");
new StudentData('Jay',999,'pune','english',78.66);






console.log("---------------------------");
/*
class Product
{
    constructor(pname,pid)
    {
        this.productName=pname;
        this.productId=pid;

    }
}

//object
let p1=new Product('macbook',10009989);
console.log(p1);

*/








