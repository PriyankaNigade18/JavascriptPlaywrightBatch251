
import {test,expect} from "@playwright/test"
import { selectByValue,selectByIndex,selectByLabel,selectBasedDropdown } from "./Generic/Utility";

test("Test Select tag based dropdown",async({page})=>{

    await page.goto("https://www.amazon.in/");

    //identify dropdown +select option
    //select option based on value
   // await page.locator("#searchDropdownBox").selectOption("search-alias=audible");

    let selectDD=page.locator("#searchDropdownBox");
    //select by value
    //await selectDD.selectOption("search-alias=audible");
    await selectByValue(selectDD,"search-alias=audible");

    await page.waitForTimeout(1000);

    //select  by label(visible text)
    await selectDD.selectOption({label:"Gift Cards"});

    await page.waitForTimeout(1000);
    //select by index
    await selectDD.selectOption({index:3});

    await page.waitForTimeout(2000);
})


test.only("Test Select Based Dropdown for Custmize code",async({page})=>{

/*
1.calculate total options
2.select specific option

*/
await page.goto("https://www.amazon.in/");

//click on dropdown
let amazonDD=page.locator("#searchDropdownBox");

let optionsLocator="//select[@name='url']//option";
await selectBasedDropdown(page,amazonDD,optionsLocator,"Watches");




// await amazonDD.click();

// //get the all options
// let allOptions=await page.locator("//select[@name='url']//option").all();

// console.log("Total Options are: "+allOptions.length);//46

// for(let i of allOptions)
// {
//     console.log(await i.innerText());
//     if((await i.innerText()).includes("Toys & Games"))
//     {
//         console.log("Option found.....");
//         //select this option
//         //i.click();//error
//         amazonDD.selectOption({label:"Toys & Games"});

//         break;
//     }

    
// }

await page.waitForTimeout(2000);



})



