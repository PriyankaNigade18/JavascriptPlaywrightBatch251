/*
1.Function declaration

2.Function Expression
    2.1 Anonymous function
    2.2 Arrow function
*/

console.log("---------function Expression--------");

let test1=function print()
        {

        console.log("This is function expression in Js");
    
        }

   
//calling
    //print();//ReferenceError: print is not defined
    test1();

    console.log(typeof test1);
    console.log(test1.name);
    
    //function with parameter
        /**
         * 
         * @param {string} pname 
         */
    let test2=function getData(pname)
        {
        console.log("for "+pname+" price is: "+200);
        
        }

        test2('book');

        console.log("-----------------");

//function expression with return
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 */
let test3=function calculation(a,b,c)
    {
    //console.log(a+b+c);
        return a+b+c;
    }

    let result=test3(10,20,30);
    console.log(result);
        
console.log("-------------------");
/**
 * 
 * @param {string} env 
 */

let test4=function testEnv(env)
    {
switch(env.trim().toLowerCase())
{
    case 'qa':
        console.log("Test executed on QA env");
        break;
     case 'dev':
        console.log("Test executed on DEV env");
        break;
     case 'prod':
        console.log("Test executed on PROD env");
        break;
        default:
        console.log("----Wrong Env------");
        
        
}
}

test4('dev');





    
    

