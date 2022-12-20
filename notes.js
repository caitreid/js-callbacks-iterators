// class notes 12-20-22

// const someArr = ['donut', 'gravy', 5]
// let emptyArr = []
// console.log('this is someArr', someArr)
// for (let i = 0; i < someArr.length; i++) {
//     emptyArr[i] = someArr[i] + '!' 
//     console.log(`The #${i+1} item in someArr is: ${someArr[i]}`)
// }
// console.log('this is emptyArr', emptyArr)

// traditional for...loop issues
// hard to target individual values
// all iterations happen sequentially(this is sorta true, sorta not an issue, but other methods have functionality that can get around this(sorta))
// the length could possibly change while the loop is running, could also be tricky trying to tell the loop to end. 
// the way it's written, the above loop affects the original array of data


// const someSent = 'this is a sentence with letters in the words'

// for (let i = 0; i < someSent.length; i++) {
//     console.log(`The #${i+1} item in someArr is: ${someSent[i]}`)
// }
// console.log('this is someSent \n', someSent)
// const sentArr = someSent.split(' ')
// split is a string iteration method
// console.log('this is sentArr \n', sentArr)

////////////// ARRAY ITERATORS FINALLY START HERE ////////////////////////

// FOR EACH!! ////////////////////////////////////////////////////////////

// const friends = ["Markus", "Tim", "Ilias", "Elie"]

// old way, with a for loop
// for (let i = 0; i < friends.length; i++) {
//   console.log("Hello, " + friends[i] + "!");
// }

// const revBuddies = []

// cool new way, with the .forEach iterator
// arrayName.forEach(callbackFunction)
// the anonymous callback function here in our forEach has one param
// the param is called 'buddy' (bc this is an arr of friends)
// buddy is our reference for each friend
// the param of the callback is representative of each item in the array
// friends.forEach((buddy)=>{
//     console.log("Hello, " + buddy + "!")
//     console.log(buddy)
//     // this takes each item in the array pushes them to a new array
//     revBuddies.push(buddy.toLowerCase().split('').reverse().join(''))
// })
// results after splitting, reversing and joining the strings in the friends arr
// console.log(revBuddies)

// this wont work, bc forEach does not return value
// const revBuds = friends.forEach(bud => { console.log(bud.split('').reverse().join('')) })
// no returns no console log not the way to do this
// console.log(revBuds)

// both output the same thing
// > Hello, Markus!
// > Hello, Tim!
// > Hello, Ilias!
// > Hello, Elie!

// all forEach does is perform some action on each item in an array. NO RETURNS (it doesnt return anything)

// const arrayOfNums = [1, 2, 3, 4, 5]
// const arrOfItemsAfterForEach = []
// when setting up a foreach, remember that you can refer to each item in an array with the first param
// the default reference for the second param of our callback function is the index of each array item
// arrayOfNums.forEach((num, index) => { 
//     // console.log('this is the number:', num)
//     // console.log('what is this:', index)
//     // if we want to save the results of our actions
//     // we need to tell it to put them somewhere
//     // because forEach doesn't return and cant save the value to a variable
//     arrOfItemsAfterForEach.push(num * index)
// })

// console.log('this is arrOfItemsAfterForEach', arrOfItemsAfterForEach)


// const foods = ["pizza", "tacos", "ice cream"]

// your code here
// foods.forEach((favFood) => {
//     console.log(`I like ${favFood}`)
//     // console.log('I like ' + favFood)
// })

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"

// const foods = [
//     {name: "Pizza", level: "very"},
//     {name: "Tacos", level: "mostly"},
//     {name: "Cottage Cheese", level: "not very"},
//     {name: "Donuts", level: "extremely"}
// ]

// your code here
// demonstrates the power of interpolation by adding some conditional logic in our sentence
// fun tip: your callback doesn't really need the parens when you only have one param
// foods.forEach(food => {
//     console.log(`${food.name} ${food.name[food.name.length - 1] === 's' ? 'are' : 'is'} ${food.level} delicious!`)
// })

// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

// MAP!! ////////////////////////////////////////////////////////////

// map iterates over an array and returns a new array after running the original array's items through a provided callback function

// const names = ["tim thompson", "ilias iliad", "elie ellison", "markus mourning"]

// old way with for loop
// const cased = [];
// for (let i = 0; i < names.length; i++) {
//   cased.push(names[i].toUpperCase());
// }
// console.log(cased);

// new way with `map`
// const cased = names.map((person) => {
//     // If I wanted to just cap the first letter of each name
//     // I have to do more stuff before I can return
//     let newName = ''
//     // finds the index of a certain character(first occurrence) within a string
//     let indexOfSpace = person.indexOf(' ')
//     // builds newName by referencing specific characters, i.e. our spaces and the first letters of each word on either side of the space
//     newName = person[0].toUpperCase() + (person.slice(1, indexOfSpace)) + ' ' + person[indexOfSpace + 1].toUpperCase() + person.slice((indexOfSpace + 2))
//     // return person.toUpperCase()
//     return newName
// })
// console.log(cased)

// the first version of our map was kinda simple 
// const cased2 = names.map((person) => {
//     return person.toUpperCase()
// })
// we can do this in one line with the following syntax
// bc we only use one param, we dont need our parenthesis
// bc we're immediately returning after one action, we dont even need {}
// this is because of the arrow functions implied return
// this implicit return happens when you dont use curly braces, and its great for little one liners like this. Where your function only needs to do one simple thing.
// const cased3 = names.map(person => person.toUpperCase())

// console.log(cased3)
// Should output
// > ['TIM THOMPSON', 'ILIAS ILIAD', 'ELIE ELLISON', 'MARKUS MOURNING']
// > ['TIM THOMPSON', 'ILIAS ILIAD', 'ELIE ELLISON', 'MARKUS MOURNING']


// const names = ["tim thompson", "ilias iliad", "elie ellison", "markus mourning"];
// console.log('this is array of names\n', names)

// const splitName = (fullName) => {
//     console.log('this is fullname after split', fullName.split(" "))
//     // returning an object with two keys, and assigning values based on our split
//     return {
//         firstName: fullName.split(" ")[0], 
//         lastName: fullName.split(" ")[1]
//     }
// }
// remember that we pass in a function DEFINITION 
// THATS DIFFERENT THAN SAYING PASS IN A FUNCTION
// map is able to automatically pass arguments to functions based on the items in the array that you are mapping over.
// const objNames = names.map(splitName)

// console.log('this is the result of the map', objNames)

// Should output
// > [ { firstName: 'tim', lastName: 'thompson' },
//   { firstName: 'ilias', lastName: 'iliad' },
//   { firstName: 'elie', lastName: 'ellison' },
//   { firstName: 'markus', lastName: 'mourning' } ]



// FILTER!! ////////////////////////////////////////////////////////////

// filter returns a shallow copy of the original array with all the items that pass the test
// test functions should return a boolean value
// arrayName.filter(some function that runs a test)

// names, [odd, odd, even, even]
// const names = ["tim", "ilias", "elie", "markus", "timm", "scarlet", "ashley"]

// const isEven = function (name) {
//     // checking to see if the name length has any remainders after dividing by two
//     // if the name length is an even number of characters
//     return name.length % 2 === 0
// }

// console.log('is this an even name? timm', isEven('timm'))
// console.log('is this an even name? guy', isEven('guy'))
// console.log('is this an even name? suzie', isEven('suzie'))

// const isOdd = function (name) {
//     // return words whose length is an odd number of characters
//     return name.length % 2 !== 0
// }

// const evenLengthNames = names.filter(isEven)
// const oddLengthNames = names.filter(isOdd)

// console.log(evenLengthNames)
// console.log(oddLengthNames)

// const evenLengthNames2 = names.filter(name => name.length % 2 === 0)
// const oddLengthNames2 = names.filter(name => name.length % 2 !== 0)
// console.log("///////////////////////")
// console.log('names from the one liner anon callback versions of these filters')
// console.log(evenLengthNames2)
// console.log(oddLengthNames2)
// Should output
// > ["elie", "markus"]
// > ["tim", "ilias"]

// this works if you only have one param, and only one thing to do/return
// const capName = name => name.toUpperCase()

// console.log('capName', capName('timm'))

// const pets = [ 
//     {name: "fluffy", age: 2, type: "cat"}, 
//     {name: "fido", age: 1, type: "dog"}, 
//     {name: "nelly", age: 64, type: "parrot"}, 
//     {name: "benedict", age: 1, type: "sea cucumber"}, 
//     {name: "spot", age: 10, type: "dog"}, 
//     {name: "magic", age: 9, type: "cat"}
// ]

// const dogs = pets.filter(function(pet){
//     return pet.type==="dog"
// })

// const cats = pets.filter(pet => pet.type === "cat")

// console.log("all of the dogs", dogs)
// console.log("all of the cats", cats)

// console.log(dogs[0].name)

// REDUCE!! ////////////////////////////////////////////////////////////

// combines array elements using an accumulator, a currentvalue and optionally an initial value
// the initial value sets the very first value of the accumulator
// then the accumulator interacts with the currentvalue until all elements of the array have been accumulated, and reduce returns that accumulated value
// the default initial value is the first item(VALUE NOT INDEX) in your array.

// const array1 = [10, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
// acc = 1
// acc 3
// acc 6
// 10
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => {
//     console.log('this is the accumulator: ', accumulator)
//     console.log('this is the current value: ', currentValue)
//     console.log('this is what is returned on this iteration', accumulator + currentValue)
//     return accumulator + currentValue
// })

// console.log('final value after reduce', sumWithInitial)
// expected output: 10

// const arrOfLetters = ['t', 'i', 'm', 'm']

// acc = accumulator
// cVal = currentValue
// const myName = arrOfLetters.reduce((acc, cVal) => acc + cVal, '')

// const myName2 = arrOfLetters.reduce(
//     (accumulator, currentValue) => {
//       console.log('this is the accumulator: \n', accumulator)
//       console.log('this is the current value: \n', currentValue)
//       console.log('this is what is returned on this iteration: \n', accumulator + currentValue)
//       return accumulator + currentValue
//   }, 'donuts are beloved by ')