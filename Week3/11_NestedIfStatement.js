/*
Conditional Statements
------------------
1.Simple If
2.If/else
3.Ladder if
4.Nested if
5.SwitchCase

*/

console.log("-----Example1-------");
//Student pass/fail scenario

let marks=28;

if(marks>=40)
{
    console.log("You are Pass!");
    if(marks>=90)
    {
        console.log("Your grade is A");
        
    }else if(marks>=75)
    {
        console.log("Your grade is B");
        
    }else{
        console.log("Your grade is C");
        
    }
    
}else{
    console.log("You are Fail!");
    
}

console.log("------Example2------");

/*
marks=80;
marks>=90   A
marks>=95   A++
otherwise B
*/


let mark=94;

if(mark>=90)
{
    if(mark>=95)
    {
        console.log("Grade A++");
        
    }else{
        console.log("Grade A");
        
    }
}else{
    console.log("Grade B");
    
}







