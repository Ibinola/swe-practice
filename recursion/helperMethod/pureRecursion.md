- For arrays, use methods like **slice**, **the spread operator** and **concat** that makes copies of arrays so you do not mutate them.

- Remember that strings are immutable so use methods like **slice**, **substr** or **substring** to make copies of strings.

- To make copies of objects use **Object.assign or the spread operator**

```javascript
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
```
