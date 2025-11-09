/*
1.Function declaration

2.Function Expression
    2.1 Anonymous function
    -------------------------
    function without name

    2.2 Arrow function
*/

console.log("----arrow function------");

let test1=()=>{
            console.log("This is Arrow() number1");
            
            }

//call
test1();

console.log("-------------");

let test2=()=>{console.log("This is Arrow() number2")}

//call
test2();

console.log("--------parameter-----");
let test3=(ele)=>console.log(ele);
test3(1200);

//single parameter
let test4=ele=>console.log(ele);
test4(1500);

let even=ele=>ele%2===0;
let res=even(10);
console.log(res);

//multiple parameter ()
let sum=(a,b)=>{
                return a+b;
                };
 console.log(sum(10,200));
                
//real time usecase

let product=['mac','samsung','laptop'];

console.log(product);

product.forEach(element => {
    console.log(element);
    
});
