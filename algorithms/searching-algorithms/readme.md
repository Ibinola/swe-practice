<h1>Searching Algorithms</h1>

- Implement linear search on arrays
- Implement binary search on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching algorithm

<h1>Linear Search</h2>

The best we can do with an unsorted piece of data.

**JavaScript Search methods**

- indexOf() -> returns an index of an element if it exists, returns -1 is the element does not exist
- includes() -> returns a boolean value(true - if an element exists, false - if an element does not exist)
- find() ->
- findIndex() ->

**BIG O**

- Worst Case = O(n)
- Average Case = O(n)
- Best Case = O(1)

<h1>Binary Search</h1> 

- Much faster form of search
 - Rather than eliminating one element at a time, elements can be eliminated half of the remaining elements at a time.
- Binary search only works on sorted arrays! i.e if numbers(lowest to highest, highest to lowest), or strings(alphabetically)

**Implementation Idea**

Divide and Conquer - Split the array in two pieces, pick a pivot point in the mid, check left and right side and see where it would be based on what we are looking for. Remember it has to be sorted.
