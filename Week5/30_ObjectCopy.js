
let number1=[10,20,30,40,50];
console.log(number1);

//create copy of this array: [...spread operator]

let number2=[...number1];
console.log(number2);
/*
...spread opertaor:
 applicable for copy of array,copy of object
 we can pass n number of parameters to the functions

*/

//copy of object: {...object}
let u1={
    name:'Geeta',
    id:101
}

//this time 2 objects will be created inside memory
let u2={...u1};
console.log(u1);
console.log(u2);
u2.name="Poonam";
console.log(u1);
console.log(u2);










