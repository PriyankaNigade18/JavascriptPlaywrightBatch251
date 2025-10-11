/*
1.Arithmetic Operators: +,-,*,/,%
2.Unary Operators ++ --
3.Ralational Operators >,>= < <= !=
    ==(loose equality)      ===(strict Equality)
4.Logical Operator &&AND ||OR !NOT
*/

console.log("--------Arithmetic Operators--------");

let a=100,b=20;
console.log(a+b);
console.log("Addition is: "+a+b);
console.log("Addition is: "+(a+b));
console.log("Subtarction is: "+(a-b));
console.log("Multiplication is: "+(a*b));
console.log("Division is: "+(a/b));
console.log("Modulus is: "+(a%b));

console.log(190/0);//Infinity
console.log(-190/0);//-Infinity
console.log("Hi"/90);//NaN (Not a number)
console.log("Hello"/"hi");//NaN
console.log(undefined/99);//NaN
console.log(0/0);//NaN no meaning of this operator


console.log("--------isNaN()---------");
//isNaN(): is value not a number
//Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
console.log(isNaN("Jay"));//true
console.log(isNaN(19009));//false

console.log("-----Unary Operator------");
/*
++(Increment)
-------------------
1.postIncrement : a++
2.preIncrement  : ++a

let a=100;
a++ = a=a+1

--(Decrement)
-------------------
1.postDecrement : a--
2.preDecrement  : --a

let a=100;
a-- = a=a-1

*/

let a1=90;
console.log(a1);//90
console.log(++a1);//91


let b1=100;
console.log(b1);//100
console.log(b1++);//100
console.log(b1);//101

let c=876;
let d=c++;//value will assign then increment(post)
console.log(c);//877
console.log(d);//876
/*
Post-> First initialization then increment
Pre -> First increment then initialization
*/

let x=67;
let y=++x;
console.log(x);//68
console.log(y);//68

//decrement
let a2=90;
console.log(a2);//90
console.log(a2--);//90
console.log(a2);//89

let b2=56;
console.log(b2);//56
console.log(--b2);//55

/*
Post-> First initialization then decrement
Pre -> First decrement then initialization
*/

let u=120;
let v=u--;
console.log(u);//119
console.log(v);//120

let r=77;
let s=--r;
console.log(r);//76
console.log(s);//76

console.log("-------Ralational OPerator----------");
//  >(greater than)  >=(greater than equal to) <(less than)  <=(less than equal to) !=(not equal)
// test data: r=s=76   u=119 v=120 c=877 x=y=68

console.log("Greater than >: "+(c>v));//true
console.log("Greater than equal to: >=: "+(x>=y));//true
console.log(c>=u);//true
console.log(x>=u);//false

console.log("less than <: "+(x<r));//true
console.log("Less than equal to <=: "+(r<=s));//true
console.log(v<=u);//false

console.log("Not equal to !=: "+(r!=s));//false
console.log(r!=c);//true

/*
==(loose equality)  vs  ===(strict equality)

loose equality ==
------------------
By default it will conver the type of values and then compare

strict equality ===
--------------------
It will test as it is values not conversion

*/


console.log("100"==100);//true

console.log(null==undefined);//true

console.log("----------strict equality----------");

console.log("100"===100);//false

console.log(null===undefined);//false


console.log("------------Logical operator----------");

/*

c1            c2           &&(AND)         ||(OR)          !(NOT)!c1

true        true            true            true            false
true        false           false           true            false
false       true            false           true            true
false       false           false           false            true

*/
// test data: r=s=76   u=119 v=120 c=877 x=y=68

console.log("-------&&--------");
console.log((c>u) && (x===y));//true
console.log((r===s) && (u>v));//false
console.log((c<v) && (r===s));//false
console.log((c<u) && (r!=s));//false


console.log("-------||--------");
console.log((c>u) || (x===y));//true
console.log((r===s) || (u>v));//true
console.log((c<v) || (r===s));//true
console.log((c<u) || (r!=s));//false


console.log("------!NOT------");
console.log(x===y);//true
console.log(!(x===y));//false

console.log(c<u);//false
console.log(!(c<u));//true

console.log((c>u) && !(c>u));//false


console.log((c>u) || !(c>u));//true






































