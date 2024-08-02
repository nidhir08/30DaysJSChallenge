/* Activity 1: Variable Decalaration */ 
//Task 1: Declare a variable using var, assign it a number and log the value to the console.

var number = 10;
console.log(number);

//Task 2: Declare a variable using let, assign it a string and log the value to the console.
let firstName = "Nidhi";
console.log(firstName);


/* Activity 2: Constant Declaration */
//Task 3: Declare a variable using const, assign it a boolean value and log the value to the console.
const isNum = true;
console.log(isNum);


/* Activity 3: Data Types */
//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variables type using typeof operator 
let num = 6;
console.log(typeof(num));

let str = "Hello";
console.log(typeof(str));

let isValue = false;
console.log(typeof(isValue));

let obj = {
    fName : "Nidhi",
    lName: "Rawat",
    rollno: 60 
}
console.log(typeof(obj));

let arr = [6,12,18,24];
console.log(typeof(arr));


/* Activity 4: Reassigning Variables */
//Task 5: Declare a variable using let, assign it an initial value, reassign a new value and log both values to the console.
let y = 10;
console.log("Initial Value: ", y);
y = 20;
console.log("New Value: ", y);


/* Activity 5: Understanding const */
//Task 6: Try reassigning a variable declared with const and observe the error 
const a = 6;
try{
    a = 10;
}catch(e){
    console.log("Error message is: ", e.message);
}


//Feature Request 
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let newNum = 100;
let string = "30 Days Challenge";
let boolean = true;
let object = {
    fruits : "Mango",
    color: "Yellow"
}
let array = [2,3,4,5];

console.log("Value: ", newNum,",", "Type: ", typeof(newNum));
console.log("Value: ", string, ",","Type: ", typeof(string));
console.log("Value: ", boolean, "," ,"Type: ", typeof(boolean));
console.log("Value: ", object, "," ,"Type: ", typeof(object));
console.log("Value: ", array,"," ,"Type: ", typeof(array));


// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let x = 10;
console.log("Initial Value: ", x);
x = 20;
console.log("New Value: ", x);

const v = 10;
console.log("Initial Value: ", v);

try{
     v = 20;
    console.log("New Value: ", v);
}catch(e){
    console.log("Error message is: ", e.message);
}

