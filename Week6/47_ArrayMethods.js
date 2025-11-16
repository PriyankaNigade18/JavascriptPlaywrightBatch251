

let products=['mobile','laptop','tv','mouse','keyboard'];

console.log(products);

console.log("--------------------");

//forEach():Performs the specified action for each element in an array.
products.forEach((arrayValue)=>{
console.log(arrayValue);
//console.log(arrayValue.toUpperCase());
if(arrayValue.includes('tv'))
{
    console.log("Product found!");
   //break;
}


})

console.log("-------------with loop--------");

for(let ele of products)
{
    console.log(ele);
    
    if(ele.includes("tv"))
    {
        console.log("product found!");
        break;
        
    }
}

console.log("--------some()-------");


/*
Foreach() iterate array element but we can not add break or return
*/
//some(): here alwo we can not apply break but we can use return

let result=products.some((arrayValue)=>{

    console.log(arrayValue);
    if(arrayValue.includes("tv"))
    {
        console.log("Product found");
        return true;
    }
    return false;
})

//console.log("status: "+result);
