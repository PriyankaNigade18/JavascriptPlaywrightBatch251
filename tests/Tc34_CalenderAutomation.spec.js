

import {test,expect} from "@playwright/test"

test("Automate Redbus calender", async({page})=>{

    await page.goto("https://www.redbus.in/");

    //open calender
    await page.locator("//i[contains(@class,'icon-date_range')]").click();

    //Expectations
    let expDate="6";
    let expMonth="April";
    let expYear="2026";

    //month selection
    while(true)
    {
        let calDate=await page.locator("//p[contains(@class,'monthYear')]").innerText();
        //console.log(calDate);
        let actMonth=calDate.split(" ")[0];
        let actYear=calDate.split(" ")[1];
        // console.log(actMonth);
        // console.log(actYear);
        if(actMonth.includes(expMonth) && actYear.includes(expYear))
        {
            console.log("Month  & year found");
            break;
         }else{
            //click on next arrow
            await page.locator("//i[contains(@aria-label,'Next month')]").click();

         }
        
    }
    //date selection
    let allDates=await page.locator("//ul[contains(@class,'datesWrap')]//li//span").all();
    
    for(let date of allDates)
    {
        if((await date.innerText()).includes(expDate))
        {
            await date.click();
            break;
        }
    }




await page.waitForTimeout(2000);
})


test.only("Automate Goibibo calender", async({page})=>{

    await page.goto("https://www.goibibo.com/flights/");

    //close popup
    await page.locator("//span[contains(@class,'icClose')]").click();

    //open calender
    await page.locator("(//span[contains(@class,'lbl_input')])[3]").click();

    //Expectations
    let expDate="6";
    let expMonth="April";
    let expYear="2026";

    //month selection
    while(true)
    {
        let calDate=await page.locator("(//div[@class='DayPicker-Caption'])[1]").innerText();
        //console.log(calDate);
        let actMonth=calDate.split(" ")[0];
        let actYear=calDate.split(" ")[1];
        // console.log(actMonth);
        // console.log(actYear);
        if(actMonth.includes(expMonth) && actYear.includes(expYear))
        {
            console.log("Month  & year found");
            break;
         }else{
            //click on next arrow
            await page.locator("//span[@aria-label='Next Month']").click();

         }
        
    }
    
    //date selection
    let allDates=await page.locator("(//div[@class='DayPicker-Body'])[1]//div[contains(@class,'DayPicker-Day')]//p[1]").all();
    
    for(let date of allDates)
    {
        if((await date.innerText()).includes(expDate))
        {
            await date.click();
            break;
        }
    }




await page.waitForTimeout(2000);
})








