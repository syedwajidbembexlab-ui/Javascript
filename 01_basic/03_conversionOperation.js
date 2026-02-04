let score = false

console.log(typeof score)   // number
console.log(typeof (score)) // 

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // NaN (Not a Number) because "33abc" is not a valid number string

