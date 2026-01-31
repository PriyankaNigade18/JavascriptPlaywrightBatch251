
import {test,expect} from "@playwright/test"

test.beforeAll(async()=>{
console.log("Before All execute before all test cases one time");

})

test.afterAll(async()=>{
    console.log("After All execute after all the test case one time");
    
})

test.beforeEach(async()=>{
    console.log("Before each executes before every test case");
    
})

test.afterEach(async()=>{
    console.log("After each executes after every test case");
    
})

test("Home page test",()=>{
    console.log("This is home page test");
    
})


test("Search page test",()=>{
    console.log("This is search page test");
    
})