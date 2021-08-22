// Fizzbuzz
// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally
// Hint: We may need to make use of the modulo operator a % b

// What do you need: a for loop from 1-100 to figure out which numbers 
// Use modulo operator to figure out multiples
// Need conditionals to validate the numbers 

for(var i=1; i<101; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if(i % 3 == 0) {
        console.log("Fizz");
    } else if(i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}   

// Additional Notes:
// var x = 9 % 3 == 0;
// var y = 25 % 5 == 0;
    
// console.log(x);   // true
// console.log(y); // true

