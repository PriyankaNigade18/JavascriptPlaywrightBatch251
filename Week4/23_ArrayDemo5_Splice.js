
//splice: add/remove and replace elements of array from any position
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//syntax
//splice(start index,delete count,elements to insert )

let cart=['apple','banana','mango','orange','kiwi'];
    //      0       1       2           3       4

console.log(cart);
    
//remove the 1 element from index 2
let deletedEle1=cart.splice(2,1);//start with 2 and delete 1 element
console.log(deletedEle1);
console.log(cart);//[ 'apple', 'banana', 'orange', 'kiwi' ]

//start with index 1 and delete 2 elements
let deletedEle2=cart.splice(1,2);
console.log(deletedEle2);
console.log(cart);//[ 'apple', 'kiwi' ]



//add elements at specific position
//start from index 1 and add two elements[ 'banana', 'orange' ]
cart.splice(1,0,'banana','orange','grape');
console.log(cart);

//delete last 2 elements
//remove elements from end of array use -ve index
//[ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]
//      -5     -4        -3        -2       -1

let deletedEle3=cart.splice(-2,2);
console.log(deletedEle3);
console.log(cart);

//[ 'apple', 'banana', 'orange' ]
cart.push('kiwi','mango','grape');
console.log(cart);

//[ 'apple', 'banana', 'orange', 'kiwi', 'mango', 'grape' ]
//replace Mango with KingOfFruit
let deletedEle4=cart.splice(4,1,'KingOfFruit');
//starts with 4th index delete 1 element(4th position) and replce that element with new

console.log(deletedEle4);
console.log(cart);

console.log("-----------------------------");

let months=['jan','feb','mar','apr','may','jun'];
console.log(months);
/*
//delete apr from current array
months.splice(3,1);
console.log(months);

//delete apr,may from current array
months.splice(3,2);
console.log(months);
*/

//add dec before jan month
months.splice(0,0,'Dec');
console.log(months);

//add after june aug
months.splice(7,0,'aug');
console.log(months);

//replace May as holiday month
months.splice(5,1,'holidaymonth');
console.log(months);

//replace mar and apr with spring

months.splice(3,2,'spring','spring');
console.log(months);









