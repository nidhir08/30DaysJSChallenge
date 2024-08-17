/* Arrays */

/* Activity 1: Array Creation and Access */
//Task 1: create an array of numbers from 1 to 5 and log the array to the console.
let numbers = [1,2,3,4,5];
numbers.forEach(num => {
    console.log(num);  
});

//Task 2: Access the first and last element of the array and log them to the console.
console.log(`Arrays 1st element is : ${numbers[0]}`);
console.log(`Arrays Last element is : ${numbers[numbers.length - 1]}`);


/* Activity 2: Array Methods(Basic) */
//Task 3: Use the push method to add a new member to the end of the array and log the updated array.
let array = [20,30,40,60];
array.push(80);
console.log(`Updated Array after pushing the new element: ${array}`);

// //Task 4: Use the pop method to remove the last element from the array and log the updated array.
array.pop();
console.log(`Updated Array after popping the element : ${array}`);

// //Task 5: Use the shift method to remove the first element from the array and log the updated array.
array.shift();
console.log(`Updated Array after shifting the element : ${array}`);

// //Task 6: Use the unshift method to add a new member to the beginning of the array and log the updated array.
array.unshift(10);
console.log(`Updated Array after unshifting the element : ${array}`);


/* Activity 3: Array Methods(Intermediate) */
//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr = [2,4,6,8,3];
let doubleArr = arr.map(num => num * 2);
console.log(`Array after mapping the numbers: ${doubleArr}`);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenArray = arr.filter(num => num %2==0)
console.log(`Array after filtering the numbers: ${evenArray}`);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumArray = arr.reduce((sum,num)=> sum+num,0)
console.log(`Sum of the array: ${sumArray}`);


/* Activity 4: Array Iteration */
//Task 10: Use the for loop to iterate over the array and log each element.
let array1 = [10,20,30,40];
for(let i =0;i<array1.length;i++){
    console.log(array1[i]);
}

//Task 11: Use forEach method to iterate over the array and log each element.
array1.forEach(num=>
    console.log(num)
)


/* Activity 5: Multi-dimensional Arrays */
//Task 12: Create a 2D array(matrix) and log the entire array to the console.
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);

//Task 13: Access and log a specific element from the two-dimensional array.
console.log(`Specific element ${matrix[0][1]}`);
for(let i = 0;i<matrix.length;i++){
    for(let j=0;j<matrix.length;j++){
        console.log(`Accessing element ${matrix[i][j]}`);
    }
}


/* Feature Request */
//1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push,pop, shift and unshift methods.
let array = [10,20,30,40]
array.push(10);
console.log(`Updated Array after pushing element : ${array}`);
array.pop();
console.log(`Updated Array after popping element : ${array}`);
array.shift();
console.log(`Updated Array after shifting element : ${array}`);
array.unshift(10);
console.log(`Updated Array after unshifting element : ${array}`);

//2. Array Transformation Script: Create a script that uses map, filter and reduce methods to transform and aggregate array data.
let numberArray = [1,2,3,4,5];
let multiplyNumbers = numbers.map(num => num*10);
console.log(`Array after multiplying numbers: ${multiplyNumbers}`);
let oddNumbers = numbers.filter(num => num%2!=0);
console.log(`Array after filtering odd numbers: ${oddNumbers}`);
let sumNumbers = numbers.reduce((sum,num)=> sum+num,0);
console.log(`Sum of the array: ${sumNumbers}`);

//3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
for(let i=0;i<array.length ; i++){
    console.log(array[i]);
}
array.forEach(num=> 
    console.log(num)
)

//4. Two dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two dimensional array.
let twoDimensional = [[1,2,3],[4,5,6],[7,8,9]];
console.log(twoDimensional);
for(let i = 0;i<matrix.length;i++){
    for(let j=0;j<matrix.length;j++){
        console.log( matrix[i][j]);
    }
}
