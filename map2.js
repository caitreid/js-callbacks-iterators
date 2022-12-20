
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]




// e.g. "36 is larger than 30"

// Square each number in the array
const array2 = numbers.map(num => Math.pow(num, 2))

// Filter the resulting array by numbers larger than 30
const array3 = array2.filter(num => num > 30)

// For each remaining element, print a string declaring it larger than 30

array3.map((num)=>{
    console.log(`${num} is larger than 30`)
})

