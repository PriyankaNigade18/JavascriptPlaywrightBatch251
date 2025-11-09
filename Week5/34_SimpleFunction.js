/*
1.Function declaration

2.Function Expression
    2.1 Anonymous function
    2.2 Arrow function
*/

console.log("-------Function declaration-------");
//simple function without parameter and return

function print()
{
    console.log("This is print()...");
    
}

//call
print();

//function with parameters 
//a:any  b:any so it works
function add(a,b)//2 parameters
{
console.log(a+b);
}

console.log(typeof add);//function

//call
add(10,20);
add('Hello','All');

console.log("----------------------");

//function which should Accept only number type of data

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function addition(a,b)
{
console.log(a+b);

}

//call
addition(100,200);//300
//addition("hello","all");

console.log("---------------------------------");

//function with return keyword
/*
return keyword:
used to return any result/data from function
return keyword always return value to calling function
*/
/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function mul(a,b)
{
return a*b;
}

//call
let result=mul(10,20);
console.log(result);

console.log(mul(100,200));

console.log("----------Scenario--------");

/*
design function which accept browsername(it should be string) 
and compare valid browser chrome,edge,firefox 
return true(valid) or false (invalid)
*/

/**
 * 
 * @param {string} bname 
 */
function launchBrowser(bname)
{
    switch(bname.trim().toLowerCase())
    {
        case 'chrome':
            console.log("Launch chrome browser");
            return true;
        case 'edge':
            console.log("Launch Edge browser");
            return true;
        case 'firefox':
            console.log("Launch firefox browser");
            return true;
        default:
            console.log(bname+' is inavild');
            return false;
               
    }
}

let isBrowserLaunch=launchBrowser('CHROME');

if(isBrowserLaunch)
{
    console.log("Enter url address of application");
    
}












