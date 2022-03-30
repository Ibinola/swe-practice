The scope of a variable refers to where in a program a variable's value can be accessed. The scope of a variable in JavaScript is defined as _function scope_. This means that a variable's value is visible within the function definition where the variable is declared and defined and within any functions that are nested within that function.

When a variable is defined outside a function, in the main program, the variable is said to have _global scope_, which means its value can be accessed by any part of a program, including functions. An example demonstrates how global scope works:

```javascript
function showScope() {
  return scope;
}

var scope = "global";

console.log(scope); // displays "global"
console.log(showScope()); // displays "global"
```

The function `showScope()` can access the variable scope because `scope` is a global variable. Global variables can be declared at any place in a program, either before or after function definitions.

Now let's see what happens when we define a second `scope` variable within the `showScope()` function

```javascript
function showScope() {
  var scope = "local";
  return scope;
}

var scope = "global";

console.log(scope); // displays "global"
console.log(showScope()); // displays "local"
```

Even though the two variables have the same name, their scopes are different, and their values also different when accessed within the area of the program where they are defined.

All of this is normal and expected. However, this can all change if you leave off the keyword `var` during variable definitions. JavaScript allows you to define variables without using the `var` keyword, but when you do, that variable automatically becomes global scoped, even if defined within a function as we can see below:

```javascript
function showScope() {
  scope = "local";
  return scope;
}

scope = "global";

console.log(scope); // displays global
console.log(showScope()); // displays local
console.log(scope);
```

This happens because the scope variable inside the function is not declared with the `var` keyword, when the string `"local"` is assigned to the variable, we are actually changing the value of the scope varibale in the main program. ** You should always begin every definition of a variable with the `var` keyword to keep things like this from happening. **

Unlike many other modern programming languages, JavaScript does not have _block scope_. With block scope, a variable can be declared within a block of code and that variable is not accessible outside that block of code.
