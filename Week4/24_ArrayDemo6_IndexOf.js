

//indexOf(): return index of element 
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let days=['mon','tue','wed','thu','fri','sat','sun'];
let index1=days.indexOf('thu');
console.log(index1);//3

let index2=days.indexOf('sun');
console.log(index2);//6

let index3=days.indexOf('monday');
console.log(index3);//-1

console.log('=================');


let users=['jay','pooja','amit','kiran','smita','sumit','amit','neha','smita'];

//get the index of first occurrent value - amit
let fo=users.indexOf('amit');
console.log(fo);//1

//get the index of second occurrent value :amit
//let index5=users.indexOf('amit',2);
let index5=users.indexOf('amit',fo+1);
console.log(index5);//6


//get the index of first occurrent value - smita
let s1=users.indexOf('smita');
console.log(s1);//4

//get the index of second occurrent value :smita
let s2=users.indexOf('smita',s1+1);
console.log(s2);//8






