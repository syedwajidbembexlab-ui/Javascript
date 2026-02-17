// Primitive Data Types Summary

//7 Primitive Data Types in JavaScript:
// 1. String: Represents sequences of characters, enclosed in single or double quotes.
// 2. Null: Represents the intentional absence of any object value.
// 3. Undefined: A variable that has been declared but not assigned a value has the value undefined.
// 4. Symbol: Represents a unique identifier, often used as keys for object properties.
// 5. Boolean: Represents logical entities and can have two values: true or false.
// 6. Number: Represents both integer and floating-point numbers.
// 7. BigInt: Represents integers with arbitrary precision, allowing for the representation of very large numbers.

// Note: JavaScript is dynamically typed, meaning variables can hold values of any type without explicit type declarations.


// Reference (Non primitive) Data Types Summary

// Arrays, Objects, Functions are Reference Data Types in JavaScript.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail

const id = Symbol('id')
const anotherId = Symbol('123')

console.log(id === anotherId) // false, because each Symbol is unique

const bigNumber = 9007199254740991n

//reference data types (non-primitive data types)
//array, object, functions

const heros = ['Batman', 'Superman', 'Spiderman']
let myObj = {
    name: 'John',
    age: 30,
    isLoggedIn: false
}

const myFunc = function() {
    console.log('Hello World')
}

console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof myFunc) // function
// Note: Arrays and Objects are of type 'object', while Functions are of type 'function'.



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===

//Stack (Primitive) and heap (Non-primitive)

// let myName = "John" // stored in stack

// let person = { // stored in heap
//     name: "John",
//     age: 30
// }

// let anotherPerson = person // anotherPerson is a reference to the same object in heap

// console.log(person); // { name: 'John', age: 30 }
// console.log(anotherPerson); // { name: 'John', age: 30 }

// anotherPerson.age = 31

// console.log(person);
// console.log(anotherPerson); // { name: 'John', age: 31 } both person and anotherPerson reflect the change because they reference the same object in heap

let myYoutubename = "Codevolution" // stored in stack

let anothername = myYoutubename // anotherYoutubename is a copy of the value in stack
anothername = "Codevolution Channel" // changing anotherYoutubename does not affect myYoutubename

console.log(myYoutubename) // Codevolution
console.log(anothername) // Codevolution Channel