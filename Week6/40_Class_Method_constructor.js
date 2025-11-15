
let sum=function(a,b)
{
console.log("Sum is: "+(a+b));

}
//calling
sum(100,200);

console.log("----------------");
/*
In js function and method both are different
Function which can help you to perform certian operation
When we declare any block of statements inside class that
 is referred as method
 Method can not be function but function can be method

*/
class StudentData
{
    //class level variables:by default it is public

    id;
    fname;

    //constructor will help to initialize object
    constructor(sid,sname)
    {
        this.id=sid;
        this.fname=sname;
    }

    //method
    getData()
    {
        console.log("Student id is: "+this.id);
        console.log("Student name is: "+this.fname);
              
    }


}

//object
let s1=new StudentData(101,'Sameer');
s1.getData();

let s2=new StudentData(201);
s2.getData();







