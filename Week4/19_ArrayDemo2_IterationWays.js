/*
Array is an Object where we can store multiple elements
Array is Nonprimitive Type 
In Javascript Array is implemented as interface

Every Object in Javascript is Dynamic Object

Iteartion Ways
===============
1.using for loop
2.using for...of loop
3.using for...in loop

*/

let arr=['Chrome','Safari','Edge','Firefox','Opera'];//0-4
console.log(arr);

console.log("----------Simple for loop--------");
//index based iteration
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}
/*
collection of elements/object
-------------------------
1.for...of loop
-----------------
for...of loop applicable for array and string iterable object
in this loop it iterates over values

2.for...in loop
--------------------
for...in loop applicable for Objects/inteface
in this loop it iterates over keys or index
*/

console.log("----------for...of loop--------");

for(let i of arr)
{
    console.log(i);//values
    
}


console.log("----------for...in loop--------");

for(let i in arr)
{
    console.log(i);//indexing
    
}

console.log("----------");

for(let i in arr)
{
    console.log("index: "+i+" value ="+arr[i]);
    if(i==='3')
    {
        console.log("Browser is: "+arr[i]);
        
    }
    
}





