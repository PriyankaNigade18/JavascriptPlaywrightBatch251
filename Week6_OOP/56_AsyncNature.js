


import {readFile} from "fs/promises"
//synchronus
/*
for(let i=1;i<=10;i++)
{
    console.log("Hi");
    
}*/

//async 
/*
console.log("Program starts.....");
setTimeout(()=>{
    console.log("Hello all.....");
    
},3000);
console.log("Program ends......");
*/


//problem statement:1

// let response=fetch("https://api.restful-api.dev/objects/7");

// console.log(response);//Promise { <pending> }

//to handle this design async function and use await keyword

async function test1()
{
    let response=await fetch("https://api.restful-api.dev/objects/7");

    console.log(response);
}


test1();

console.log("------------------");



// let data=readFile("Week6_OOP/Test.txt","utf-8");
// console.log(data);//Promise { <pending> }

async function fileRead()
{
let data=await readFile("Week6_OOP/Test.txt","utf-8");
console.log(data);
}

fileRead();

