<h1> Recursion </h2>
A function that calls itself.
Function calls can be made recursively in JavaScript. Here's an example:

```javascript
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

factorial(5); // displays 120
```
To demonstrate how this works, here's a diagram for when this _factorial(5)_ function is called

```javascript
return 5 * factorial(4)
return 5 * return 4 * factorial(3)
return 5 * return 4 * return 3 * factorial(2)
return 5 * return 4 * return 3 * return 2 * factorial(1)
return 5 * return 4 * return 3 * return 2 * return 1
return 5 * return 4 * return 3 * return 2
return 5 * return 4 * return 6
return 5 * return 24
return 120
```

<h2>Two ways to solve a problem</h2>

- Iteratively
- Recursive way.

<h2>Essential parts of a recursive function</h2>

- Base Case = The condition when the recursion ends.

- Different input

<h2>Problems during recursion</h2>

- No Base Case
- Forgetting to return or returning the wrong thing!
- Stack overflow!

**NOTE: Any function that uses recursion can be rewritten in an iterative manner**

## Reference

1.  [Data Structures and Algorithms with JavaScript - Michael McMillan]

2.  [Javascript Algorithms and Data Structures - Colt Steele]
