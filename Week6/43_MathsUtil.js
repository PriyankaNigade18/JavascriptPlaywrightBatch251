
export const pi=3.14;

export const salary=80000;

export let add=function(a,b)
{
console.log("Addition is: "+(a+b));

}

export let mul=function(a,b)
{
console.log("Multiplication is: "+(a*b));

}

export class TestStudent
{
    constructor(marks)
    {
        this.marks=marks;
    }

    getData()
    {
        console.log("Marks are : "+this.marks);
        
    }
}

export let test1=function()
{
    console.log("test1 is calling.....");
    
}


export let test2=function()
{
    console.log("test2 is calling...");
    
}


//export {test1,test2,pi,salary,TestStudent}