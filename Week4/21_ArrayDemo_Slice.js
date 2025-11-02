
//slice():portion of array like substring
//slice(start index ,end index ): starts with start index but lastindex-1

let numbers=[10,20,30,40,50,60];
//    index: 0, 1 , 2, 3, 4, 5, 
console.log(numbers);

let num1=numbers.slice(2,4);//lastindex-1
console.log(num1);//[30,40]


let num2=numbers.slice(1,5);//start from index 1 and endindex-1
console.log(num2);//[20,30,40,50]

//get last 3 elements of array(negative index)
let num3=numbers.slice(-3);
console.log(num3);//[ 40, 50, 60 ]

let num4=numbers.slice(-2);
console.log(num4);

let num5=numbers.slice(1);//start from 1 to length of array
console.log(num5);
















