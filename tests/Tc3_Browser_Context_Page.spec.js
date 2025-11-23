

//import playwright library
import {test} from "@playwright/test"

//browser: returns instance of main browsers(chromium,webkit,firefox)
//view1:browser-->context(Only required for multiuser application,role based testing)-->page
//view2:browser-->page
test("Test for Browser Fixture view1",async({browser})=>{

    //from browser create new Context(Isolated browser context)
    //Creates a new browser context. It won't share cookies/cache with other browser contexts
    let context1=await browser.newContext();

    //create new tab in context(page)
    //Creates a new page in the browser context.
    let page1=await context1.newPage();
    await page1.goto("https://www.google.com");

    //In same cotext open new tab
    let page2=await context1.newPage();
    await page2.goto("https://www.facebook.com");

})

test("Test for Browser fixture view2",async({browser})=>{

    //browser:instance of original supported browser by playwright
    let page=await browser.newPage();
    await page.goto("https://www.facebook.com");

})

//context fixture
test("Test for Fixture context",async({context})=>{

    //tab
    let page1=await context.newPage();

    await page1.goto("https://www.amazon.in");

})

//page 
test.only("Test for Page fixture",async({page})=>{

    await page.goto("https://automationplayground.com/crm/");
})
