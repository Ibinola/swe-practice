Big O is short for order of, which we can also think of as the algorithm's rate of growth, whether that rate of growth is the amount of time the algorithm takes or the space it takes up in memory. In other words, Big O is used both to measure the **runtime** of an algorithm (how long it takes to execute) and the **space** of an algorithm (how much space it takes in memory).

We use Big O to determine the worst-case scenario for an algorithm. The worst case scenario is also known as the **upper bound**. The upper bound is the absolute most number of operations that an algorithm will need to take when it executes. So it's not quite accurate to think of Big O in terms of how long an algorithm takes to run but rather how many operations it will take to complete.

<h2>O(1) TIME</h2>

O(1) is **constant** time. That means that no matter how Big Our data set is, the algorithm will always take the same amount of time. Imagine we have the following function which returns the first element of an array:

```javascript
function returnFirst(array) {
  return array[0];
}
```

No matter how Big the data set is, returning the first item in the data set is trivial. It will always take the same amount of time.

Note that O(1) doesn't **necessarily mean fast**. It just means constant. For instance, imagine we have a very Big, heavy rocket that we want to send to the moon. It's a powerful rocket but it's also fairly slow. The benefit of this rocket is that no matter how much equipment we put in the storage of the rocket, it will take the same amount of time to get to the moon. We'd say that the time is constant even though it will take a long time to get to the moon.

In general, though, algorithms that use O(1) are very efficient. For instance, inserting a node at the beginning of a linked list is O(1) because it will always be the same regardless of how Big the linked list is.
