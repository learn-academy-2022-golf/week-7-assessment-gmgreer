// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.



describe("makeSentence", ()=> {
  it("function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized", ()=>{
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(makeSentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Test Suites: 1 passed, 1 total

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Function that takes in an array of objects as input
const makeSentence = (arr) => {
  //Map over the array
   return arr.map((obj)=>{
    //split the name value of the object and assign it to a variable so it can be manipulated
    let nameArr = obj.name.split(" ")
    //separate and uppercase only the first character of the name then slice it back together
    let first = nameArr[0][0].toUpperCase() + nameArr[0].slice(1)
    let second = nameArr[1][0].toUpperCase() + nameArr[1].slice(1)
    // return all of the parts interprolated into a sentence
    return `${first} ${second} is ${obj.occupation}.`
  })
}
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.



describe("getRemainders", ()=>{
  it("function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", ()=>{
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(getRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(getRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})


// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// b) Create the function that makes the test pass.
//create a function that takes an array of mixed types as input
const getRemainders = (arr) => {
  //filter the array so you only have numbers, then map over the array to return the remainder when divided by three.
  return arr.filter(item => typeof item === "number" ).map(item => item % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumCubed", ()=>{
  it("function that takes in an array of numbers and returns the sum of all the numbers cubed", ()=>{
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// b) Create the function that makes the test pass.
// create a function that takes an array of numbers as input
sumCubed = (arr) => {
  // use the reduce higher order function. Reduce takes an array and returns a single value. Two arguments the first is the accumulated value, the second is the input from the loop. Cube each number. The 0 after the comma is the initial value.
  return arr.reduce((sum, num) => num ** 3 + sum, 0) 
}