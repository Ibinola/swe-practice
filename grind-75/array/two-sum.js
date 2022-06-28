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



