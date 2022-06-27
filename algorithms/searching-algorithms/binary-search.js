/* 
func accepts a sorted arr and a val
create a left pointer at the start of the array and a right pointer at the end of the array.

while the left pointer comes before the right pointer;
    - create a pointer in the mid
    - if you find the value you want, return the index
    - if the value is too small, move the left pointer up
    - if the value is too large, move the right pointer down

- if you never find the value, return -1
  example1 : 
        input : [1,2,3,4,5,6,7,8,9,10], 7
        output: [6]
*/
function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {

    if (val > arr[mid]) {
      start = mid + 1;

    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === val ? mid : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30, 49, 60], 13))
