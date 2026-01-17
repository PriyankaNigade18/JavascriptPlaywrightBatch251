
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

test.only("Automate Double click action",async({page})=>{


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