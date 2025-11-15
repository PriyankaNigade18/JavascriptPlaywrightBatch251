

//this keyword will refer current class object properties
//Literal Object way
let user={
    uid:101,
    uname:"Kiran",
    getData:function()
    {
        console.log("User id is: "+this.uid);
        console.log("User name is: "+this.uname);
              
    },
    print:function()
    {
        console.log("Calling getData()");
        this.getData();
        
    }

}

console.log(user.uid);
console.log(user.uname);
user.getData();
user.print();


