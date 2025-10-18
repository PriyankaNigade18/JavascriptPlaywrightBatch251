/*
String is primitive type and Object in javascript
String is collection of characters
String is Immutable

property
----------
length 

Methods
---------
charAt()
indexOf()
trim()
includes()
split()
toUpperCase()
toLowerCase()
*/

console.log("------String Immutablity----------");

let s1="Hello";
console.log(s1);
s1[3]='L';
console.log(s1);

console.log("-----------Method-------------");

//lenght is property
let s2="Hello All";
console.log("length is: "+s2.length);

//convert string toUpperCase() toLowerCase()
console.log(s2.toUpperCase());
console.log(s2.toLowerCase());

//trim():ignore white space before and after the string
let s3="     welcome all        ";
console.log(s3);
console.log(s3.trim());

//charAt(index):return single character
let s4="Playwright is WebUi testing tool";
console.log("character at index 6: "+s4.charAt(6));//i

//indexOf(char): Returns the position of the first occurrence of a substring.
console.log("Index of char i: "+s4.indexOf('i'));//6

//lastIndexOf(char):Returns the last occurrence of a substring in the string.
console.log("index of last Occurrence of i: "+s4.lastIndexOf('i'));//24

//indexOf(): for seraching second position index of character i
console.log("index of second i: "+s4.indexOf('i',7));//11


//concat()
let s5="Hello All Welcome ";
console.log(s5+s4);
console.log(s5.concat(s4));


//includes(): partial match
//let s4="Playwright is WebUi testing tool";

console.log("check for tool?: "+s4.includes('tool'));
console.log("check for automation?: "+s4.includes("automation"));

//startWith(prefix)  endsWith(suffix)
console.log("check string starts with Playwright?: "+s4.startsWith("Playwright"));
console.log("check string starts with Play?: "+s4.startsWith("Play"));
console.log("check string starts with P?: "+s4.startsWith("P"));
console.log("check string starts with wright?: "+s4.startsWith("wright"));


console.log("check string ends with tool?: "+s4.endsWith("tool"));
console.log("check string ends with ol?: "+s4.endsWith("ol"));
console.log("check string ends with l?: "+s4.endsWith("l"));
console.log("check string ends with too?: "+s4.endsWith("too"));


//replace()
let s6="Playwright is automation testing tool and Weui testing tool also support for APi testing";
console.log(s6.replace("testing","******"));


//replaceAll()
console.log(s6.replaceAll("testing","*******"));

//split(regular expression):String array
let tools="Selenium,Playwright,Appium,Cypress,PostMan";
console.log(tools);

let strArr=tools.split(",");
for(let i=0;i<5;i++)
{
    console.log(strArr[i]);
    
}

console.log(strArr[0]);














