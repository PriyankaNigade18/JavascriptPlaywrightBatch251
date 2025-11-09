
/*
 * 
keys()  values()  entries()
 */

let user={
    name:'Piyush',
    age:30,
    city:'Mumbai',
    isEmployeed:true
}

console.log(typeof user);//object
console.log(user);

//keys():array[]
let allKeys=Object.keys(user);
console.log(allKeys);

console.log("---------------");

//values():array[]

let allValues=Object.values(user);
console.log(allValues);

console.log("---------------");
//entries():Returns an array of key/values of the enumerable own properties of an object
let allProp=Object.entries(user);
console.log(allProp);


