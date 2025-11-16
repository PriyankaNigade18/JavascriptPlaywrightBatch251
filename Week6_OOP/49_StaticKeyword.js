/*
-static keyword we can apply to variable or method
-anything static means anything common properties 
-any static property or method we can called by className
-To call static data Object is not required 

-Static memory will be allocated in Common Memory area
-Static data/method will get memory only one time in CMA
which can shared with all objects

-Nonstatic variables/method will get new memory every time when
we create object
*/

class Employee
{
    //class level variables
    eid;
    ename;
   static orgName="HSBC";

    constructor(id,name)//local
    {
        this.eid=id;
        this.ename=name;
    }

    display()
    {
        console.log("Oraganization Name is: "+Employee.orgName);
        console.log("Employee id is: "+this.eid);
        console.log("Employee name is: "+this.ename);
         
                
    }

    static show()
    {
        console.log("This is show()");
        
    }

}

let e1=new Employee(101,'Akhil');
e1.display();
//e1.show();
//static method
Employee.show();

console.log("------------");

let e2=new Employee(102,"kiran");
e2.display();
