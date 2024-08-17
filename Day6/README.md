# Arrays in JavaScript

## 1. Array Creation
Arrays in JavaScript are used to store multiple values in a single variable. They can be created in several ways:

### Using Array Literals:
let fruits = ['apple', 'banana', 'cherry'];

### Using the Array Constructor:
let numbers = new Array(1, 2, 3, 4);
This creates an array with the specified elements.

### Using Array.of():
let nums = Array.of(1, 2, 3, 4);
This creates an array with the provided values, even if there is only one value.

### Using Array.from():
let arr = Array.from('hello');
This creates an array from an array-like or iterable object (e.g., a string or another array).

## 2. Accessing Array Elements
Array elements are accessed using zero-based indexing. The index starts from 0 for the first element.

## 3. Array Methods

### push(): 
Adds one or more elements to the end of an array and returns the new length of the array.
### pop():
Removes the last element from an array and returns that element.
### unshift():
Adds one or more elements to the beginning of an array and returns the new length of the array.
### shift(): 
Removes the first element from an array and returns that element.
### filter(): 
Creates a new array with all elements that pass a test implemented by the provided function.
### reduce(): 
Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
### map(): 
Creates a new array with the results of calling a provided function on every element in the calling array.
### forEach():
Executes a provided function once for each array element.
### for Loop: 
Traditional for loop used to iterate over array elements.

## 4. Two-Dimensional Arrays

A two-dimensional array is essentially an array of arrays. It can be visualized as a table or matrix.

