

import {test,expect} from "@playwright/test"

test("Test for Parent and child locator",async({page})=>{

//open application
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

//total 13 options:CssSelector Parent--->child
//Multiple elements: all() :locators[]
//When the locator points to a list of elements, this returns an array of locators,
let allOptions=await page.locator("aside a").all();
console.log("Total Options are: "+allOptions.length);//13

//get the text of every link: textContent() innerText():visible text

for(let ele of allOptions)
{
    console.log(await ele.innerText());
    //console.log(await ele.textContent());
    console.log(await ele.getAttribute('href'));
    
    
    
}


await page.waitForTimeout(2000);
})