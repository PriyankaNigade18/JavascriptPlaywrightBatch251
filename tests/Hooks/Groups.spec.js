import {test,expect} from "@playwright/test"

test.describe.serial("Test suite for Smoke scenario",()=>{
test("Home page test",()=>{
    console.log("This is home page test");
    
})


test("Search page test",()=>{
    console.log("This is search page test");
    
})

})

test.describe.only("Test suite for Regression scenario",()=>{
test("login page test",()=>{
    console.log("This is login page test");
    
})


test("payment page test",()=>{
    console.log("This is payment page test");
    
})

})
