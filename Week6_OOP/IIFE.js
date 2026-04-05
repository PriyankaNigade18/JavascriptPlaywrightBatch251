

(function()
{
    console.log("start server....");
    
})();

(function(name){
    console.log("Name is: "+name);
    
})('preety');

let data=(function(name)
{
    console.log("Name is: "+name);
    return name.toUpperCase();
    
})('Kiran');

console.log(data);


