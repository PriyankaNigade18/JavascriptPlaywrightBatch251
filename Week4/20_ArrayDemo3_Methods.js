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

Array Methods:
=============
add element in array
delete elements from array
modify element
search element

*/

let color=['Red','Blue','Green'];
console.log(color);//[ 'Red', 'Blue', 'Green' ]
console.log(color.length);//property 3

//push(): add element at the end of array
// Appends new elements to the end of an array, and returns the new length of the array.
color.push('Black');
console.log(color);//[ 'Red', 'Blue', 'Green', 'Black' ]
console.log(color.length);//4

color.push('White','Gray');
console.log(color);//[ 'Red', 'Blue', 'Green', 'Black', 'White', 'Gray' ]

//Unshift(): add elements from begining of array
//Inserts new elements at the start of an array, and returns the new length of the array.
color.unshift('Pink');
console.log(color);//[  'Pink',  'Red',  'Blue',  'Green',  'Black', 'White',  'Gray']


//pop(): remove element from end of array
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removeColor1=color.pop();
console.log(color);
console.log("Removed color: "+removeColor1);//Gray


//shift(): remove elements from begining of the array
let removeColor2=color.shift();
console.log(color);
console.log("Removed color: "+removeColor2);

console.log("-------------------------");

//join()
//Adds all the elements of an array into a string, separated by the specified separator string.
let words=['hello','all','welcome','to','learn','Playwright'];
console.log(words);

let sentence=words.join(" ");
console.log(sentence);

//copying the array elements use (...Spread Operator)
let first=[1,2,3];
console.log(first);
let second=[...first];//copied to second array
console.log(second);


let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
console.log(arr3);

//concat():Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let result=arr1.concat(arr2);
console.log(result);

//reverse():Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(result.reverse());

console.log("------Reverse array using for loop-----");

//Interview Question
//reverse elements of array without using method(loop)
//[ 1, 2, 3, 4, 5, 6 ]
//  0  1  2  3  4   5 index

let lastIndex=result.length-1;
let newArray=[];
for(let i=lastIndex;i>=0;i--)
{
   // console.log(result[i]);
   newArray[i]=result[i];
    
}

console.log(newArray);

//Assignment is reverse array element using for...of or for...in loop 































