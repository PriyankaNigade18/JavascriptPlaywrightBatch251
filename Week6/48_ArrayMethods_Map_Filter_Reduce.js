/*

map(): Tranform the array element
filter(): filter the array element
reduce(): reduce array element sum of ele/avg ele array


*/
//map:Calls a defined callback function on each element of an array, and returns an array that contains the results.
let numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

//print square of every number
let square=numbers.map(num=>num*num);
                        
    console.log(square);

let footerLinks=['help','prime','contact','product'];

let updatedLinks=footerLinks.map(link=>'amazon '+link);
console.log(updatedLinks);

console.log("--------------");

//filter():Returns the elements of an array that meet the condition specified in a callback function.
console.log(numbers);
let even=numbers.filter(ele=>ele%2===0);
console.log(even);

//odd
let odd=numbers.filter(ele=>ele%2!=0);
console.log(odd);

console.log(updatedLinks);

//add more elements in UpdatedLinks
updatedLinks.push('policies','customer');

console.log(updatedLinks);

//return link which starts with amazon
let amazonLinks=updatedLinks.filter(ele=>ele.startsWith('amazon'));
console.log(amazonLinks);

console.log("----------------reduce()-------------");

let marks=[10,20,30,40,50];

console.log(marks);

let total=0;
for(let num of marks)
{
total=total+num;
}

console.log("Sum of numbers: "+total);

console.log("--------");

//sum of array elements 
let sum=marks.reduce((total,num)=>total+num,0);
console.log(sum);

//multiplication
let result=marks.reduce((res,num)=>res*num,1);
console.log(result);
