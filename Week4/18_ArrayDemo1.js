/*
Array is an Object where we can store multiple elements
Array is Nonprimitive Type 
In Javascript Array is implemented as interface

Every Object in Javascript is Dynamic Object


*/

console.log("---------Array Literal---------------");

//empty array
let arr1=[];
console.log(arr1);//[]
console.log(arr1.length);//0
console.log(typeof arr1);//object

//array with similar type element
let numbers=[10,20,30,40,50];//0-4 index
console.log("Totale Elements are: "+numbers.length);//5
    //access single element from array
console.log(numbers[3]);//40
console.log(numbers[1]);//20
//wrong index
console.log(numbers[8]);//undefined

//print array
console.log(numbers);//[ 10, 20, 30, 40, 50 ]


console.log("---------------");
//multiple type of data 
let empData=['Sarang','pune',27,'M',98876665544,789.76];
console.log(empData);
console.log("Total Entries: "+empData.length);
console.log("Phone number is: "+empData[4]);

console.log(empData[10]);//undefined

console.log("----------Using Array Constructor------------");

let location=new Array('pune','Mumbai','Nashik');
console.log(location);//[ 'pune', 'Mumbai', 'Nashik' ]
console.log(location.length);//3
console.log(location[2]);//Nashik

let num=new Array(1,2,3,4,5,6);//create array 
console.log(num);
console.log(num.length);

//single number in constuctor it will take number as array size
let num2=new Array(5);//here 5 will be consider as size of array
console.log(num2);//[ <5 empty items> ]
console.log(num2.length);//5


let num3=new Array(10,20);//[10,20]
console.log(num3);//[ <10 empty items> ]==>[10,20]
console.log(num3.length);//10==>2


console.log("----------Using Array.of()------------");
//Returns a new array from a set of elements.
let num4=Array.of(100,200,300,400);
console.log(num4);//[ 100, 200, 300, 400 ]
console.log(num4.length);//4
console.log(num4[2]);//300
























