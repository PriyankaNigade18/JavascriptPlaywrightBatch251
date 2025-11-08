/*
Object is collection of Key and values pair in Js

Every key is by default String and value could be anything

Ways Of Creating Object
--------------------------
1.Object Literal
2.Using class(ES6)

------function-----
3.Using constructor function
4.Prototype based object
*/


console.log("------Object Literal-------");

let user={}
console.log(user);//{}
console.log(typeof user);//object

let person={
    name:'Sarang',
    id:1001,
    isActive:true
}

console.log(person);

//access properties of object using . and ['']
console.log(person.name);
console.log(person.id);
console.log(person.isActive);
console.log("-----------");

//access property using ['key']
console.log(person['id']);

//operations on Object add,modify,delete:yes
console.log(person);

//adding new property as city
person.city='pune';

console.log(person);

//modify object property id=2001
person.id=2001;
console.log(person);

//delete object property  city

delete person.city;

console.log(person);

console.log("--------------");

//for...in loop iterates over keys or index (Object)

for(let key in person)
{
    console.log(key);
    
}

console.log("--------------");
//As per key print value
for(let key in person)
{
    console.log(person[key]);
    
}
console.log("--------------");
//key + value

for(let key in person)
{
    console.log("for Key: "+key+" = "+person[key]);
    
}

console.log("------------------");

let color=['red','blue','white'];
    //index:   0     1      2

    console.log(color.length);//3
    
        for(let i=0;i<color.length;i++)
        {
            console.log(color[i]);
            
        }

        console.log("------------");
        
//for...in : iterate over keys or index
        for(let i in color)
        {
            console.log(i);
            
        }

console.log("------------");
        //for...of: iterates values

        for(let i of color)
        {
            console.log(i);
            
        }
/*
What is Garbage Collector?
--------------------------------
It is Automechanism called by js internally 
which monitor heap area where objects will create and 
GC will destroyed null ref object and no ref object
and heap memory will be free


Which Objects will be eligibal for garbage collector?
1.null ref object
2.No ref object

*/

let student={
    id:101,
    sname:"Kiran",
    address:'Mumbai'
}

//console.log(student);
console.log(student.address);

student=null;//null refrence object

console.log(student.address);//TypeError: Cannot read properties of null (reading 'address')


