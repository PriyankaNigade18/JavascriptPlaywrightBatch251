/*
Encapsulation:
Wrapping of data and function together in single unit called Encapsulation

Purpose:
------------
Data hiding/ data security

Real time Example:
--------------------
capsule 
class

How to achive in Javascript
------------------------------
We can declare data as private data and modify data with getter and setters methods

how to declare private variables in js
----------------------------------
#variable name

getter(): get the data 
setter(): set the data

*/

class EmployeeData
{

    //private variable is salary
    #salary;
    constructor(id,name)
    {
        this.eid=id;
        this.ename=name;
    }

    show()
    {
        console.log(this.eid);
        console.log(this.ename);
             
    }

    //setter():set the data
    setSalary(amount)
    {
        this.#salary=amount;
    }

    //getter(): get the data
    getSalary()
    {
        return this.#salary;
    }


}

let e1=new EmployeeData(101,"Parag");
e1.show();
//console.log(e1.#salary);//SyntaxError: Private field '#salary' must be declared in an enclosing class

e1.setSalary(800000);
console.log(e1.getSalary());


export {EmployeeData}