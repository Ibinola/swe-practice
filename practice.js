// for (let i = "#"; i.length <= 7; i += "#") {
//     console.log(i);
// }
// Print 1 to 100
// numbers / 3, print "Fizz"
// numbers / 5 & not 3, print "Buzz"

// numbers / 15(both 3 and 5), print 


// build up a string containing the word or words to output and print either this word or the number if there is no word, using the || operator.

for (let num = 0; num <= 100; num++) {
    var output = "";
    if (num % 3 == 0) output += `${num}: "Fizz"`;
    if (num % 5 == 0) output += `${num}: "Buzz"`;
    if (num % 15 == 0) output += `${num}: "FizzBuzz"`
    console.log(output || num);
}


// creates a string that represents an 8 x 8 grid, using newline characters to seperate lines. 


let newStr = "";

for (let i = )