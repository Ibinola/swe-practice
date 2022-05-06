// .charAt() = takes an index which starts at 0 and returns the character at that index location in the string

console.log('dog'.charAt(2)); // g

// .substring() = returns characters between the specified indices. if you don't pass a second param(endIndex), it will return all the character values from the specified start position until the end.

console.log('Youtube'.substring(3, 7)); // 'tube'


// .indexOf() = finds a specific string withing a string . nb: this function is case sensitive

console.log('Red Dragon'.indexOf("d")); // 2

// .split() = for decomposing a string into parts, returns an array of substrings

var test1 = "Mike"
console.log(test1.split('')) // ['M', 'i', 'k', 'e']

var test2 = "Mike,Dan,Tony";
console.log(test2.split(',')) // ['Mike', 'Dan', 'Tony']

// .replace() = replaces a specified string within a string variable with another string.

console.log("Jumoke imNotSure".replace("imNotSure", "Fadumila"))