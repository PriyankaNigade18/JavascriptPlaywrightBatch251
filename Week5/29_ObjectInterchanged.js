
let u1={
    name:'Anu',
    id:101
}


let u2={
    name:'Deepak',
    id:1012
}

let u3={
    name:'Kiran',
    id:1013
}

console.log(u1);
console.log(u2);
console.log(u3);

console.log("----------");

u1=u2;

console.log(u1);
console.log(u2);
console.log(u3);
console.log("----------");
u2=u3;

console.log(u1);
console.log(u2);
console.log(u3);
console.log("----------");

u3=u1;
console.log(u1);
console.log(u2);
console.log(u3);
