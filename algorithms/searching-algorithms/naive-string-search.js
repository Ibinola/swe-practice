/*
* Count the number of times a smaller string appears in a long string. a substring? sub-array?
* 
Example -> Long string: wowomgzomg
            short string: omg
how many times did "omg" appear in wowomgzomg

*/

/*
        create a function
        loop over the longer string
        loop over the shorter string
        if the characters don't match, break out of the inner loop
        if the characters match, keep going
        if you complete the inner loop and find a match increment the count of matches
        return the count
*/


// NAIVE APPROACH
// “hi hohohoh hi”,  “hi”
function naiveSearch(long, short) {

    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {

            if (short[j] !== long[i + j]) break;

            // j === last letter in the short string
            if (j === short.length - 1) count++
        }
    }
    return count;
}

naiveSearch("hi hohohoh hi", "hi"); // 2

