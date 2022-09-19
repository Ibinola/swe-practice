// Problem Statement: Return a string in reverse order
// Given: "hello",  "abcde"
// Return: "olleh", "edcba"
// Assumptions: None
// Example: reverseString("hello") should return "olleh"
// Edge Cases: None
// Initial Thoughts: can the reverse method be used ?
// Pseudocode:
// Since strings are immutable, I would create a new variable called reverseString, and loop through the input string from the end of the string, and then add each character to the new variable
// 1. def func reverseString that accepts a string as an arg
// 2. declare an empty variable "newString"
// 3. Iterate from the end of the passed in str
// 4.   At each iteration: add character to newString
// 5. Return revereString
// Solution 1:
// Code
// ```
//     function reverseString(str){  "hello"
//       let newString = " ";
//         for (let i = str.length - 1; i >= 0; i--){  "olleh"
//                  newString+=str[i];
//              }
//       return newString;
//      }
// Analysis:



// Solution 2: Using the two-pointer technique, while this doesn't reduce the time complexity, However it reduces the number of operations.  
// ```
// Code
// ```
// Analysis:

//Solution 1 : Brute-force solution

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }

    return newString;
}


// console.log(reverseString('hello'))
// console.log(reverseString('abcde'))
// console.log(reverseString('pseudocode'))
// console.log(reverseString("hello world!"))


// Analysis: time complexity: This is an O(N) run time

// Space Complexity: O(1)


// Solution 2: Using two-pointers technique, first we want to transform our string to an array, two-pointer's can't be used on strings, because they are immutable, so we need to transform it to an array, then we can use the two-pointer technique, we will have two pointers, one at the beginning of the array, and one at the end of the array, we will swap the values of the two pointers, and then move the pointers towards the middle of the array, until the two pointers meet, then we will return the array, and then we will transform it back to a string, and return the string.

function reverseString(str) {
    let strArr = str.split("")
    let pointer_1 = 0;
    let pointer_2 = str.length - 1;

    while (pointer_1 <= pointer_2) {
        const temp = strArr[pointer_2];
        strArr[pointer_2] = strArr[pointer_1];
        strArr[pointer_1] = temp;
    }

    return strArr.join("");
}

// Time complexity: O(N)
// Space complexity: O(N)

// console.log(reverseString('hello'))
// console.log(reverseString('abcde'))
// console.log(reverseString('pseudocode'))
// console.log(reverseString("hello world!"))

module.exports = reverseString;