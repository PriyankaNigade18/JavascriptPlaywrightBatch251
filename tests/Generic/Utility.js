/**
 * 
 * @param {import("@playwright/test").Locator} selectLocator 
 * @param {String} searchValue 
 */
 export async function selectByValue(selectLocator,searchValue)
 {
    await selectLocator.selectOption(searchValue);
 }

 /**
  * 
  * @param {import("@playwright/test").Locator} selectLocator 
  * @param {String} labelvalue 
  */
 export async function selectByLabel(selectLocator,labelvalue)
 {
    await selectLocator.selectOption({label:labelvalue});
 }

 /**
  * 
  * @param {import("@playwright/test").Locator} selectLocator 
  * @param {Number} indexNumber 
  */
 export async function selectByIndex(selectLocator,indexNumber)
 {
    await selectLocator.selectOption({index:indexNumber});
 }


/**
 * 
 * @param {import("@playwright/test").Page} page 
 * @param {import("@playwright/test").Locator} dropdownLoc 
 * @param {String} allOptionsLoc 
 * @param {String} value 
 */
 
 export async function selectBasedDropdown(page,dropdownLoc,allOptionsLoc,value)
 {
    //click on dropdown
    await dropdownLoc.click();

    await page.waitForTimeout(1000);
//get the all options
let allOptions=await page.locator(allOptionsLoc).all();

console.log("Total Options are: "+allOptions.length);

for(let i of allOptions)
{
    console.log(await i.innerText());
    if((await i.innerText()).includes(value))
    {
        console.log("Option found.....");
        //select this option
        //i.click();//error
        dropdownLoc.selectOption({label:value});

        break;
    }

    
}
 }