
import {test,expect} from "@playwright/test"


test("Automate Context click/Right click",async({page})=>{


    //alert
    page.on("dialog",async(alertBox)=>{

        console.log("Alert type is: "+alertBox.type());
        console.log("Alert message is: "+alertBox.message());

        //ok
        await alertBox.accept();
        
        
    })



    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    //right click on button
    //await page.getByText("right click me").click({button:"right"});

    await page.locator("//span[text()='right click me']").click({button:"right"});

    //get the menu text
    let allOptions=await page.locator("(//ul)[3]//li//span").all();
    console.log("Total options: "+allOptions.length);

    for(let ele of allOptions)
    {
        console.log(await ele.innerText());
        
        //click
        if((await ele.innerText()).includes("Copy"))
        {
            await ele.click();//alert will open 
            break;
        }
    }
    

    await page.waitForTimeout(2000);

})

test("Automate Double click action",async({page})=>{


    page.on("dialog",async(alertBox)=>{

        console.log("Alert type is: "+alertBox.type());
        console.log("Alert message is: "+alertBox.message());

        //ok
        await alertBox.accept();
        
        
    })
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    await page.getByRole("button",{name:"Double-Click Me To See Alert"}).dblclick();

    

    
    await page.waitForTimeout(2000);
})


test("Automate mouse hover",async({page})=>{

    
    await page.goto("https://www.naukri.com/",{waitUntil:"load"});

    await page.locator("//span[text()='Jobs']").hover();

    //list
    let allOptions=await page.locator("//div[contains(@class,'nI-gNb-Jobs')]//ul//li//a").all();
console.log("Total options are: "+allOptions.length);

for(let option of allOptions)
{
    console.log(await option.innerText());
    if((await option.innerText()).includes("Jobs in Pune"))
    {
        await option.click();
        break;
    }
    
}



await page.waitForTimeout(4000);
})



test("Automate dragAndDrop element",async({page})=>{

    await page.goto("https://jqueryui.com/droppable/");

    //frame
    let frame1=page.frameLocator("iframe.demo-frame");

    //frame-->src and dest
    let source=frame1.locator("#draggable");
    let target=frame1.locator("#droppable");

    //Drag the source element towards the target element and drop it.
    await source.dragTo(target);
   // page.dragAndDrop()//only accept string arguments

   await page.waitForTimeout(2000);
})

test("Keyboard actions for copy paste",async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    let textToPaste="standard_user";
    //Calls focus on the matching element.
    await page.locator("#user-name").focus();
    await page.keyboard.insertText(textToPaste);

    //copy same user name and paste it in password  selectAll(Ctrl+A)+copy(ctrl+C)+paste(Ctrl+V)
    await page.locator("#user-name").press("ControlOrMeta+A");//select all
    await page.locator("#user-name").press("ControlOrMeta+C")//copy
    await page.locator("#password").press("ControlOrMeta+V");//paste


    await page.waitForTimeout(2000);

})


test("Automate Keyboard tab sequence",async({page})=>{


await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
await page.locator("#input-firstname").focus();
await page.locator("#input-firstname").pressSequentially("John",{delay:200});
//lastname-->tab
await page.keyboard.press('Tab');
await page.keyboard.type("Smith");


//email
await page.keyboard.press('Tab');
await page.keyboard.type("johnsmith@gmail.com");

//telephone
await page.keyboard.press('Tab');
await page.keyboard.type("8776655544");

//password  
await page.keyboard.press('Tab');
await page.keyboard.type("test123");

await page.keyboard.press('Tab');
await page.keyboard.type("test123");

await page.keyboard.press('Tab');
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

await page.locator("//input[@name='agree']").check();
await page.keyboard.press('Tab');
//button

await page.keyboard.press('Enter');

await page.waitForTimeout(2000);
})


test.only("Slider automation",async({page})=>{

    await page.goto("https://jqueryui.com/slider/");

    //frame
    let frame1= page.frameLocator("iframe.demo-frame");

    //frame-->slider
    let sliderEle=frame1.locator("span.ui-slider-handle");
    let sliderArea=frame1.locator("#slider");

    //move on x axies
    await sliderEle.dragTo(sliderArea,{targetPosition:{
            x:200,y:0
    }})

    await page.waitForTimeout(2000);
})