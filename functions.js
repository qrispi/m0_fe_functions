// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
    console.log("Well howdy-there stranger! Haven't seen you 'round these parts!")
}

printGreeting()
printGreeting()
printGreeting()

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function makeCrazy(object) {
    console.log(`That's a CRAZY ${object} ya got there! Now where in tarnation did ya get it?`)
}

makeCrazy("belt buckle")

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90,000 and 110,000, the pay range is 20,000).

function postJob(company, min, max) {
    var sum = max - min
    console.log(`   ${company} is hiring developers! 
    Minimum salary: $${min}
    Maximum salary: $${max}
    Pay range: $${sum}`)
}

postJob("Google", 211000, 444000)

// 4: Write a function that satifies the following interaction pattern:

function checkStock(count, item) {
    if (count === 0) {
        console.log(`${item} - OUT of stock!`)
    } else if (count < 0) { 
        console.log(`${item} - has been OVERSOLD!`)
    } else if (count < 4) {
        console.log(`${item} - running LOW`)
    } else {
        console.log(`${item} is stocked`)
    }
}


checkStock(4, "Coffee")
// => "Coffee is stocked"

checkStock(3, "Tortillas")
// => "Tortillas - running LOW"

checkStock(0, "Cheese")
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa")
// => "Salsa - running LOW"

checkStock(-1, "Chips")
// What if a negative number was entered??