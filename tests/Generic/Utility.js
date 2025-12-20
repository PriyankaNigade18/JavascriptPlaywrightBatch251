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


 //scroll

 /**
  * 
  * @param {import("@playwright/test").Page} page 
  */
 export async function scrollDown(page)
 {
   await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight);
   });
 }

 /**
  * 
  * @param {import("@playwright/test").Page} page 
  */
 export async function scrollUp(page)
 {
   await page.evaluate(()=>{

    window.scrollTo(document.body.scrollHeight,0);
   })
 }
 
/**
 * 
 * @param {import("@playwright/test").Locator} element 
 */
 export async function scrollUpToElement(element)
 {
   await element.scrollIntoViewIfNeeded();
 }