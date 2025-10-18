/*
Loops:
============
1.for loop
----------------
Number if iterations are known/fixed

2.While loop
-------------------
Entry control loop
Number of Iteration are unknown/not fixed

3.do-while loop
----------------
Exit control
One time execution without matter what condition it is 

4.for...of loop
------------------
It is appilicable for iterable objects[Array/string]
It iterates over values


5.for...in loop
--------------------
It is appilicable for Objects
It iterated over indexes/keys

*/

console.log("----------While loop-----------");

let i=1;

while(i<=5)
{
    console.log("Welcome");
    i++;
    
}

console.log("---------------");


// let j=1;

// while(j<=5)
// {
//     console.log("Hello");
    
// } infinite time execution


//sum of digits of number
let number=1234;
let sum=0;

while(number>0)
{
    let rem=number%10;
    number=Math.floor(number/10);
    sum=sum+rem;

}

console.log("Sum of digits are: "+sum);

console.log("-------------------------");

let num=1234;
let res=0;
let str=num.toString();//"1234"
let index=str.length-1;

while(index>=0)
{
    let ch=str.charAt(index);
    res=res+Number(ch);
    index--;

}
console.log(res);










