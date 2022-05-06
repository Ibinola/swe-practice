// Collect all of the odd values in a an array
// 1. Create and empty array, where i'd store my data in
// 2. Call a function inside my array to collect the odd numbers.

// A common pattern when trying to compile some sort of result, maybe an array or some other type of data-structure. 


// a function that take's in an array and gives a new array of odd numbers.

// helper method function
// has an outer function that when called runs through an inner function that calls itself(recursive inner function)


function outerFunc(arr) {
    let newArr = []

    function innerFunc(values) {
        if (values.length == 0) return values

        if (values[0] % 2 !== 0) {
            return newArr.push[0];
        }

        innerFunc(values.splice(1));

    }

    innerFunc(arr);

    return newArr;
}

















