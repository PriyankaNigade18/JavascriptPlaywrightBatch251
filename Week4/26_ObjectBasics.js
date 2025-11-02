/*
Object is collection of Key and values pair in Js

Every key is by default String and value could be anything

Ways Of Creating Object
--------------------------
1.Object Literal
2.Using class(ES6)

------function-----
3.Using constructor function
5.Prototype based object
*/

console.log("----------Object Literals----------------");

let person={};
console.log(person);
console.log(typeof person);

let user={
        fname:"Sarang",
        age:29,
        isActive:true,
        isEmployeed:false
        }

console.log(user);

//how to read properties from object 
//1.using objectname and dot(.) operator

console.log(user.fname);//Sarang
console.log(user.age);//29
console.log(user.city);//undefined

//2. using objectname and ['key']
console.log(user['isEmployeed']);//false

console.log(user);

//add new property to the object
user.city='pune';
console.log(user);

user.country='India';
console.log(user);

//delete any property from object
delete user.isActive;
console.log(user);

//after remove search same prop
console.log(user.isActive);//undefined

//modify values of existing prop
user.country="US";
console.log(user);


console.log("-----------Iteration of Object-------");
//for...in loop:iterate over keys or index[array]

for(let key in user)
{
    console.log(key);//keys
    
}

console.log("------------------");

for(let key in user)
{
    console.log(user[key]);//values
    
}
console.log("------------------");
for(let key in user)
{
    console.log("for Key: "+key+" value="+user[key]);//values
    
}

console.log("---------------");

let student={
    fname:'Kiran',
    address:'Mumbai'
}
console.log(student);
student=null;//null ref object
console.log(student.address);//TypeError: Cannot read properties of null (reading 'address')


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

