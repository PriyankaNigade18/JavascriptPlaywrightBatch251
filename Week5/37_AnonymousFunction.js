/*
1.Function declaration

2.Function Expression
    2.1 Anonymous function
    -------------------------
    function without name

    2.2 Arrow function
*/

console.log("---Anonymous function----");

let test1=function()
            {
                console.log("This is anonymous function calling....");
                
            }

    //call
    test1();
    console.log(typeof test1);
    console.log(test1.name);

//function with parameter
let sum=function(a,b)
{
console.log(a+b);

}

sum(100,300);
    
//function with return
let test2=function(info)
{
return info;
}
   
let result=test2("Playwright is webui automation test");
console.log(result);
/**
 * 
 * @param {number} num 
 */
let square=function(num)
{
 return num*num
}

console.log(square(10));

console.log("-------------------------");
/**
 * 
 * @param {string} bname 
 */
let launchBrowser=function(bname)
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

let isBrowserLaunched=launchBrowser('edge');

if(isBrowserLaunched)
{
    console.log("Open application url...");
    
}





