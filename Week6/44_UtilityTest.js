


//import the data from module (where we have exported data)

//import * as data from './43_MathsUtil.js';
import {pi,salary,add,mul,TestStudent,test1,test2} from './43_MathsUtil.js';

mul(10,2);
add(10,20);
console.log(pi);
console.log(salary);


//create object for TestStudent class
let m1=new TestStudent(100);
m1.getData();

test1();
test2();