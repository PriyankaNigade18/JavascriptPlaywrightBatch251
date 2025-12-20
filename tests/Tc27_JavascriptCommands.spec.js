
import {test,expect} from "@playwright/test"


test("Refresh webpage using Js",async({page})=>{

   await page.goto("https://www.amazon.in/");
    
   //refresh
   //await page.reload();

   await page.waitForTimeout(1000);

   //refresh using js
   await page.evaluate(()=>{
    window.history.go(0);
   })

   await page.waitForTimeout(2000);
})

test("Read title of application using js",async({page})=>{

    await page.goto("https://www.amazon.in/");

    //get the title
    // let appTitle=await page.title();
    // console.log("Title is: "+appTitle);

    let appTitle=await page.evaluate(()=>{return document.title;});
    console.log("Title is: "+appTitle);


    await page.waitForTimeout(2000);
    
})

test.only("Test javascript command for WebElement",async({page})=>{

    await page.goto("https://www.amazon.in/");

    //Mobiles page :click
    await page.evaluate(()=>{
        document.querySelector(".nav-a[href='/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles']").click();
        document.querySelector("#twotabsearchtextbox").value="iphone";
    })


    await page.waitForTimeout(2000);

})