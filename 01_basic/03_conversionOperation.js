let score = false

//console.log(typeof score)   // number
//console.log(typeof (score)) // 

let valueInNumber = Number(score)
//console.log(typeof valueInNumber) // number
//console.log(valueInNumber) // NaN (Not a Number) because "33abc" is not a valid number string

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn) // true because 1 is a truthy value

//1 => true
//0 => false
//"" => false
//"abc" => true

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(typeof stringNumber) // string
//console.log(stringNumber) // "33" number converted to string

// *********************** Operations ***********************

let value = 3
let negValue = -value
//console.log(negValue) // -3

//console.log(2+2);
//console.log("2"+2);
//console.log( typeof "2"+2);
/*console.log(2/2);
console.log(2*2);
console.log(2-2);
console.log(2%2);
console.log(2**3); // 2 to the power 3 = 2*2*2 = 8 */ 
//console.log("2"**3); // "2" is converted to number 2 and then 2 to the power 3 = 8
//console.log(2++);

let str1 = "hello"
let str2 = "world"

//console.log(str1 + str2); // helloworld
//console.log(str1 + " " + str2); // hello world

let str3 = str1 + " " + str2
//console.log(str3); // hello world

//console.log("1" + 2);
//console.log( typeof "1" + 2);

//console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");



let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); 