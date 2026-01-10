
//It is required for Multiple window / tab automation

import { log } from "node:console";

/*
resolve: promise fullfill --handle using then()
reject: promise rejected----handle using catch()
*/
/*
//design
let myPromise=new Promise((resolve,reject)=>{

    console.log("promise started....");
    let status=true;
    if(status)
    {
        resolve("Promise resolved!");
    }
    else{
        reject("Promise reject");
    }
    
})

//call
myPromise.then((result)=>{
console.log(result);

}).catch((error)=>{
console.log(error);

})


console.log("-----resolve promise-------");

let testPromise1=new Promise((resolve,reject)=>{

    resolve("This is only resolve state...");
})

//call
testPromise1.then((res)=>{
console.log(res);

})

console.log("-----reject promise-------");

let testPromise2=new Promise((resolve,reject)=>{

    reject("This is reject state...");
})

//call
testPromise2.catch((error)=>{
console.log(error);

})
*/
/*
console.log("-------------Promise.all()---------");

//To run all promise in parallel
let p1=new Promise((resolve,reject)=>{
    resolve("p1 is resolved!");
})

let p2=new Promise((resolve,reject)=>{
    resolve("p2 is resolved!");
})
let p3=new Promise((resolve,reject)=>{
    reject("p3 is rejected!");
})

Promise.all([p1,p2,p3]).then((result)=>{
console.log(result);

}).catch((error)=>{
console.log(error);

})
*/
console.log("-----Promise.race()------");
//first setteled promise it will return

let p1=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("p1 is resolved!");
   },3000)
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("p2 is resolved!");
   },4000)
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    reject("p3 is reject!");
   },1000)
})


//call
Promise.race([p1,p2,p3]).then((result)=>{
console.log(result);

}).catch((error)=>{
console.log(error);

})






