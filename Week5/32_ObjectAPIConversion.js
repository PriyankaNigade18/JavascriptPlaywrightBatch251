/*
JSON object (String)---into Javascript object:parse()

Javascript object to JSON String: stringify()

JSON is predefined interface in js
Object is predefined interface in js
*/

let u1={
    name:'parag',
    isActive:true
}
console.log(typeof u1);// js object
console.log(u1);

//stringify(): Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let jsonString=JSON.stringify(u1);
console.log(jsonString);
console.log(typeof jsonString);//string



console.log("-------------------");

//json to js
let jsonData=`{
   "id": "7",
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
}`

console.log(jsonData);
console.log(typeof jsonData);//string


//json string --->js object
//parse():Converts a JavaScript Object Notation (JSON) string into an object.
let jsObject=JSON.parse(jsonData);
console.log(jsObject);
console.log(typeof jsObject);//object

