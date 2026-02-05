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
console.log(typeof stringNumber) // string
console.log(stringNumber) // "33" number converted to string

