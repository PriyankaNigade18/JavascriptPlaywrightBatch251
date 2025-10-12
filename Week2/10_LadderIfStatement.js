/*
Conditional Statements
------------------
1.Simple If
2.If/else
3.Ladder if
4.Nested if
5.SwitchCase

*/
//ladder if
console.log("--------------Example1--------------");

//Identify largest among 3 numbers
let n1=90,n2=798,n3=69;

if(n1>n2 && n1>n3)
{
    console.log(n1+" is largest than "+n2+" & "+n3);
    
}else if(n2>n1 && n2>n3)
{
    console.log(n2+" is largest than "+n1+" & "+n3);
}else
{
console.log(n3+" is largest than "+n1+" & "+n2);
}

console.log("--------------Example2--------------");

//Browser validation for testing

let bname="EDGE".toLowerCase();

if(bname.includes("chrome"))
{
    console.log("Test is executing on chrome....");
    
}else if(bname.includes("edge"))
{
    console.log("Test is executing on Edge....");

}else if(bname.includes("firefox"))
{
    console.log("Test is executing on Firefox....");
}else 
{
    console.log("Invalid Browser!");
    
}










