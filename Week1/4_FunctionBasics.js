
console.log("---function declaration-----");

function show()
{
    console.log("This is function declaration show() is calling...");
    
}

//call
show();
console.log("----------Function Expression(Anonymous function)-----");

let test1=function()
        {
            console.log("Anonymous function is calling....");
            
        }

    //call
    test1();
console.log("----------Function Expression(Arrow function)-----");

let test2=()=>{ console.log("Arrow function is calling....");}

//call
test2();