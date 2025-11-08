/*
In Js to create Object as Immutable(no one should modify)
we use freeze()

freeze() vs seal()

freeze(): 
create Object as immutable
no one can add,modify and delete properties of object

seal():
only existing properties we can modify
no addintion and deletion allowed
*/

let product={
    name:'iphone',
    price:100000
}

console.log(product);
//Immutable: Object interface freeze(objectname)
Object.freeze(product);

//modify the existing property
product.name='laptop';
console.log(product);

//add new property
product.version=17;
console.log(product);

//delete
delete product.name;
console.log(product);


console.log("-----------------------------");

let browser={
    name:"chrome",
    version:120
}

Object.seal(browser);

console.log(browser);

//adding new property
browser.incognito=true;
console.log(browser);

//delete existing properties
delete browser.version;
console.log(browser);

//modify existing properties
browser.version=140;
console.log(browser);

browser.name='edge';
console.log(browser);











