<h2>JavaScript Arrays Defined</h2>
The standard defintion for an array is a linear collection of elements, where the elements can be accessed via indices, which are usually integers used to compute offsets.

A JS array is actually a specialized type of JS object, with the indices being property names that can be used to represent offsets. Because Javascript arrays are just objects, they are not quite as efficient as the arrays of other programming languages.

While JavaScript arrays are, strictly speaking, JavaScript objects, they are specialized objects categorized internally as arrays. The Array is one of the recognized JavaScript object types and as such there is a set of properties and functions used with arrays.

<h3>Using Arrays</h3>

Arrays in JavaScript are very flexible. There are several different ways to **create** arrays, **access** array elements, and **perform** tasks such as **Searching** and **Sorting** the elements stored in an array.

<h3>Creating Arrays</h3>

1. Declaring an Array variable using the [] operator:

   ```javascript
   var numbers = [];
   console.log(numbers.length); // [0]
   ```

   The built-in length property displays the length of the array.

2. Declaring an Array variable with a set of elements inside the [] operator:

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   console.log(numbers.length); // 5
   console.log(numbers); // [1,2,3,4,5]
   ```

3. Using the Array Constructor:

   ```javascript
   var numbers = new Array();
   console.log(numbers.length); // 0
   ```

4. Using the Array Constructor with a set of elements as arguments to the Constructor:

   ```javascript
   var numbers = new Array(1, 2, 3, 4, 5);
   console.log(numbers.length); // 5
   ```

**Unlike other programming languages, but common for scripting languages, JS array elements do not all have to be of the same type:**

```javascript
var objects = [1, "Doe", true, null];
console.log(Array.isArray(objects)); // true
```

**THE BEST AND RECOMMENDED WAY OF CREATING AN ARRAY IS USING THE `[]` operator**
