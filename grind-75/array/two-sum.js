// Solution 1
// Time Complexity: $O(n^2)$

// Problem statement: https://leetcode.com/problems/two-sum

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i, j]
            }
        }
    }
    return -1
}

console.log(twoSum([2, 5, 5, 11], 10)) // (2) [1, 2]


// Solution 2
// Store numbers in hashtable and then for each number num, check if "T - num" also in our hash table.
// Time Complexity: O(n), Space Complexity is O(n) as well. this is called time-space complexity trade off, when we try to decrease time complexity we need to increase space complexity

function twoSum(nums, target) {
    const hashtable = {} // Stores the seen number: {seenNumber: IndexitOccured}

    for (let i = 0; i < nums.length; i++) { // loop through all numbers
        const n = nums[i]; // Stores the current number num 

        if (hashtable[target - n] !== undefined) { // check if the number we need to add to 'n' to reach our target has been seen:
            return [hashtable[target - n], i] // grab the index of seen number, and ihe index of the current number
        }
        hashtable[n] = i // updates the hashtable to include the number we just saw along with its index.
    }

    return []; // if no numbers add up to equal the 'target', we can return an empty array
}

twoSum([2, 5, 5, 11], 10) // (2) [1,2]