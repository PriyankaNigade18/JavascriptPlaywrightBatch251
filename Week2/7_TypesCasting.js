/*
Type Casting
=====================
It is process where one type of data we can convert into other type

Types
============
1.Implicit Casting/Type Coercion 
---------------------------------
Conversion take place automatically by Java script itself

2.Explicit Casting
----------------------
Manual conversion of data
    Number()
    String()
    Boolean()


Truthy and Falsy values
========================
Truthy values
================
Any true value in boolean context called truthy value

example:
----------
Nonzero number, nonempty string, true

Falsy value
==================
Any false value in boolean context called falsy value

0,"",NaN,Undefined,null,false

*/
console.log("--------------String conversion/Coercion-----------------");
/*
Rule:
Whenever we use + operator with String then other values will coerced into String
*/

let s1="Hello"+130;//130 number coerced into string  
console.log("Value is: "+s1);//Hello130
console.log("Type is: "+typeof s1);//string

let s2=10+"100"+90;
console.log("Value is: "+s2);//1010090 10 & 90 coerced into string
console.log("Types is: "+typeof s2);//string

let s3=100+90+"Hi";//100+90=190 190 coerced into string
console.log("Value is: "+s3);//190Hi
console.log("Type is: "+typeof s3);//string

let s4="abcd"+true+100;//true and 100 coerced into string
console.log("Value is: "+s4);//abcdtrue100
console.log("type is: "+typeof s4);//string


console.log("---------Number Coercion---------");
/*
When we use any arithmetic operator (-,*,/) with string 
then string will convert into number
*/

let n1=100+100;
console.log("value is: "+n1);//200
console.log("Type is: "+typeof n1);//number

let n2="100"-80;//"100" coerced into number 100-80=20
console.log("value is: "+n2);//20
console.log("Type is: "+typeof n2);//number
let n3="10"/"10";//both "10" coerced into number 10/10=1
console.log("Value is: "+n3);//1
console.log("Type is: "+typeof n3);//number

//data should be convertable
let n="Hello"-90;
console.log("value is: "+n);//NaN
console.log("Type is: "+typeof n);//number

let n4="100"*10+"20";// "100" coerced into 100*10=1000 + "20" 1000 coerced into "1000"+"20"=100020
console.log("Value is: "+n4);//100020
console.log("Type is: "+typeof n4);//string


let n5="20"*10-30;//"20" coerced into number 20*10-30=170
console.log("Value is: "+n5);//170
console.log("Type is: "+typeof n5);//number

let n6=true-20;//true is boolean coerced into number 1-20=-19
console.log("Value is: "+n6);//-19
console.log("Type is: "+typeof n6);//number

console.log("-------------Explicit conversion-------------");
/*
String()
Number()
Boolean()
*/

//string to number
let a1="200";
console.log(a1+20);//20020
console.log("type is: "+typeof a1);//string
//conversion: Number(string)
let stringToNum=Number(a1);
console.log(stringToNum+20);//220
console.log("After conversion type is: "+typeof stringToNum);//number

/*
bill="Total amount is 5000"
validate amount should be less than 10000
*/

let bill="Your total amount is 5000";

//get the amount only from bill
let data=bill.split(" ")[4];
console.log(data);
console.log(typeof data);//string
//convert into number
let amount=Number(data);
console.log("value:" +amount+" type: "+typeof amount);//number

//test it
if(amount<10000)
{
    console.log("Amount is valid!");
    
}else{
    console.log("Amount is not valid!");
    
}

console.log("----------------");

console.log(Number("100"));//100
console.log(Number(true));//1
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number(100));//100
console.log(Number(""));//0
console.log(Number(false));//0
console.log(Number("Jay"));//NaN


console.log("-----------String()----------");

let x=1000;
console.log(typeof x);//number
console.log(1000+200);//1200
//convert it into String
let numToString=String(x);
console.log(typeof numToString);//string
console.log(numToString+200);//1000200
console.log("-------------Boolean Conversion: Boolean()----------");
/*Truthy and Falsy values
========================
Truthy values
================
Any true value in boolean context called truthy value

example:
----------
Nonzero number, nonempty string, true

Falsy value
==================
Any false value in boolean context called falsy value

0,"",NaN,Undefined,null,false
*/

console.log(Boolean("Jay"));//true
console.log(Boolean(1089));//true
console.log(Boolean(true));//true
console.log(Boolean(89.66));//true
console.log(Boolean(-80));//true
console.log("----------------------");
console.log(Boolean(""));//false
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean(false));//false

































































