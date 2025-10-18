/*

break
---------------
applicable for loop and switch case
take control out side of loop and switch body

continue
----------------
it will skip certain part of the code from execution and 
continue execution until that condition is true

return
------------
whenever from function if we wanted to return any result/data
we use return
its part function


*/


for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;
    }else{
        console.log(i);
        
    }
}

console.log("-----------------");

for(let i=1;i<=10;i++)
{
    if(i===6)
    {
        continue;

    }else{
        console.log(i);
        
    }
}
console.log("-----------------");

for(let i=1;i<=1;i++)
{
let linkref="";

if(linkref.includes("https"))
{
    console.log("valid link");
    
}else{
    console.log("skip that link...its invalid");
    
    continue;
}

}





