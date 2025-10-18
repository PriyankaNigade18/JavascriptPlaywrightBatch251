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

console.log("--------for loop--------");

for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}

console.log("-------------");
//print 1 to 10 number
for(let i=1;i<=10;i++)
{
    console.log(i);
    
}

console.log("-------------");
//print 10 to 1
for(let i=10;i>=1;i--)
{
    console.log(i);
    
}

console.log("---------------");

//print all even numbers upto 10
for(let i=1;i<=10;i++)
{
    if(i%2===0)
    {
        console.log("Even number: "+i);
        
    }
}

console.log("---------------");
//sum of 100 natural numbers =5050
//1+2+3+4+.....+100=5050

let sum=0;
for(let i=1;i<=100;i++)
{
    sum=sum+i;
}

console.log("Sum of 100 natural numbers is: "+sum);

console.log("---------------");
//factorial of 5!=5*4*3*2*1=120

let fact=1;
for(let i=5;i>=1;i--)
{
    fact=fact*i;
}

console.log("--------------------");
//be default for loop condition is always true
for(;;)
{
    console.log("Hi");
    
}
















