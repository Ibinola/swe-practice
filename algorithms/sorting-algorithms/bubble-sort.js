/*
    Bubble sort algorithm, is the simplest sorting algorithm that runs through a list repeatedly, compares adjacent elements, and swaps them if they are out of order.


    Given an array of unsorted values, how can we sort them so that they end up in ascending order?
    Example: [4,2,7,1,3] return [1,2,3,4,7]
*/

/*
Version 1
 
 pseudocode
 - Iterate through the unsorted array
    - Create an inner loop to compare, each element 
        - If indx1 > indx1 + 1
        - Swap if the comparison is true
- Return the sorted array
*/

function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr;
}

console.log(bubbleSort([4,2,7,1,3])); 
//-> [1,2,3,4,7]

/*
 This is a brute force solution, which isn't the most effective because in the worst case it takes O(n^2)

 Best Case: O(n^2)
 Worst Case: O(n^2)
 Avg Case: O(n^2)
*/



/*
Version 2
 
 pseudocode
 - Create a do while loop
 - Define a variable sorted as true(1)
    - Iterate through the array elements
        - Compare the first element to the second element
        - Swap if the comparison is true
        - sorted as false(0)
- End the do-while when elements have been sorted While (!sorted) 
*/

function bubbleSort(arr){
    let sorted;
    do {
         sorted = 1; // [4,2,7,1,3] 
        for (let i = 0; i < arr.length; i++){
            if (arr[i] > arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                 sorted = 0;
            }
        }

    } while(!sorted)

    return arr;
}

console.log(bubbleSort([4,2,7,1,3]))

/*
Best Case: O(n)

Worst Case: O(n^2)
*/

