
import {test,expect} from "@playwright/test"

test("Automate single file upload",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.getByText("Upload Files").scrollIntoViewIfNeeded();


    //single file: <input type="file"> then only we can automate
    //current root directory(Project): ./
    await page.locator("#singleFileInput").setInputFiles("./Files/Appiumsetup.txt");
    
    //upload
    await page.getByRole("button",{name:"Upload Single File"}).click();

    //status
    let singleFileEle=page.locator("#singleFileStatus");
    await expect(singleFileEle).toHaveText(/Single file selected/);
    console.log(await singleFileEle.innerText());
    

    await page.waitForTimeout(3000);
})

test.only("Automate Multiple files upload",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.getByText("Upload Files").scrollIntoViewIfNeeded();

    await page.locator("#multipleFilesInput").setInputFiles(["./Files/Appiumsetup.txt","./Files/APIScripting.docx"]);
    
    //upload
    await page.getByRole("button",{name:"Upload Multiple Files"}).click();

    //assertion:Multiple files selected
    let multipleFileEle=page.locator("#multipleFilesStatus");

    await expect(multipleFileEle).toHaveText(/Multiple files selected/);
    console.log("Status: "+await multipleFileEle.innerText());
    

    await page.waitForTimeout(3000);
})