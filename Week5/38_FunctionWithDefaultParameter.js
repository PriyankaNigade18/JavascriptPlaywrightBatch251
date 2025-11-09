
//by default
function print(name="Priyanka")
{
console.log("hi "+name);

}

print("poonam");
print();

print('Sarang');
print();

/**
 * 
 * @param {string} bname 
 */
let launchBrowser=function(bname='chrome')
{
    console.log("browser name is: "+bname);
    
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
            console.log(bname+' is inavild hence launching default browser chrome');
            return false;
               
    }

}
let isstatus=launchBrowser('safari');
if(isstatus)
{
console.log("Enter url");

}