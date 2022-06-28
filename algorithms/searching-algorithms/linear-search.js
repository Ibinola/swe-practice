//input -> - [2,8,1,3,5]
// loop through every element in the array and check if the current element is equal to our value (3)
// if it is, return the index at which the element is found
// if not found else return -1
//value -> - 3

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) return i
    }
    return -1;
}

linearSearch([2, 8, 1, 3, 5], 5); // 4
