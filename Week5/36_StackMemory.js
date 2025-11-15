
/*
Every function got executed by executable stack
stack is LIFO(last in first out)

*/

function testing()
{
    console.log("testing...");
    dev();
    
}

function dev()
{
    console.log("development...");
    //testing();//RangeError: Maximum call stack size exceeded
    
}

testing();
dev();


console.log("-------------------------");

/*
Recursion function: when function call itself that is recursive call
Playwright we avoid recursion

*/

function login()
{
    console.log("do login....");
    login();//RangeError: Maximum call stack size exceeded
    
}

login();