/*
DataTypes:
-------------
Using datatype we can define what type of data we are storing into variable

1.Primitive DataTypes(primary)
-----------------------
1.Number
2.String
3.Boolean
4.Undefined
5.Null
6.BigInt(ES6)NA
7.Symbol(ES6)NA

2.NonPrimitive 
--------------
Object


typeof operator
===============
typeo operator help us to understang what type of data is store into that variable

Dynamic type/loosely coupled language
============================================
In Js no need to define data type at the time of declartion any variable

*/

console.log("---------------number-----------------------");

//In js any positive,negative or decimal digit number is number type

let num1=99;
console.log("Number 1 is: "+num1);//99
console.log("Type is: "+typeof num1);//number


let num2=-89;
console.log("Number 2 is: "+num2);//-89
console.log("Type is: "+typeof num2);//number



let num3=89.66;
console.log("Number 3 is: "+num3);//89.66
console.log("Type is: "+typeof num3);//number

console.log("-------------boolean(true/false)-----------");

let isActive=true;
console.log("Is student active in session: "+isActive);//true
console.log("Type is: "+typeof isActive);//boolean

let isStatus=false;
console.log("Status is: "+isStatus);//false
console.log("Type is: "+typeof isStatus);//boolean


console.log("------------String--------------");

/*
String is collection of characters
String is Immutable class 
In Js String is primitive datatype
Ways to declare any string
--------------------------
1.using single quote 'Hello'
2.Using double quote "Hello"
3.Using back tick/template string `Hello`
*/

let userName="Mahima";
console.log("User name is: "+userName);//Mahima
console.log("Type is: "+typeof userName);//string

let address='Pune';
console.log("Address is: "+address);//Pune
console.log("Type is: "+typeof address);//string

let gender='F';
console.log(typeof gender);//string

//template string: group of statements 
/*
const profileInfo=`My name is Priyanka,
 I have over 15years of experience in testing
I am ISTQB certified tester even I completed my masters in Computers`;

console.log("Profile info is: "+profileInfo);
console.log("Type is: "+typeof profileInfo);//string
*/

let signleObject=`{
   "id": "7",
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
}`;

console.log(signleObject);
console.log(typeof signleObject);//string

let trainerName="Priyanka";

let certificate="ISTQB";

const profileInfo=`My name is ${trainerName},
 I have over 15years of experience in testing
I am ${certificate} certified tester even I completed my masters in Computers`;

console.log("Profile info is: "+profileInfo);
console.log("Type is: "+typeof profileInfo);//string


let data="My name is "+trainerName;
console.log(data);

console.log("----------------undefined--------------");
/*
Undefined:
---------------
Whenever any variable declare without any assignment(variable is not 
initialized) then type of variable and value of variable is Undefined

*/


let marks;
console.log("Marks are: "+marks);
console.log("type is: "+typeof marks);

console.log("----------null---------");
/*
null means unknown

any null data type is Object type(this is bug in Js)
*/

let modelNumber=null;
console.log("Model number is: "+modelNumber);//null
console.log("Type is: "+typeof modelNumber);//Object

console.log("------------BigInt(ES6)Not requried in ST---------------");
/*
BigInt
------------
 Any integer number you can store as big int by using n as suffix value 
*/
console.log("Max number: "+Number.MAX_VALUE);
//7976931348623157e+308

let numData1=7976931348623157308n;
console.log(typeof numData1);


console.log("------------Symbol(not required ES6)---------------");
/*
Symbol type is applicable for Object
To store unique key and avoid conflict for variable names we use symbol
*/

let id1=Symbol('uid');//unique data
let id2=Symbol('uid');
console.log(id1);
console.log(typeof id1);
console.log(id1==id2);//loose equality

let salary=Symbol('esalary');

let employee={
    "eid":201,
    "ename":"Kiran",
    [salary]:80000
}
console.log(employee);
console.log(typeof employee);
console.log(employee.esalary);//undefined

console.log(employee.salary);
console.log(employee[salary]);













console.log("-------------Object(non primitive)-----------");

//1.Object literal way
let person={
            "id":101,
            "name":"Sumit"
            };
console.log(person);//{}
console.log(typeof person);//object
console.log("Id is: "+person.id);
console.log("Name is: "+person.name);
















































