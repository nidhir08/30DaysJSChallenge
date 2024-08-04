/* Control Structures */

/* Activity 1 : If-else statements */
//Task 1: Write a program to check if a number is positive,negative or zero and log the result to the console.
// let number = prompt('Enter a Number');
// if(number>0){
//     console.log(`${number} is positive `);
// }
// else if( number < 0){
//     console.log(`${number} is negative `);
// }
// else{
//     console.log(`${number} is zero `);
// }

//Task 2: Write a program to check if a person is eligible to vote (age>=18) and log the result to the console
// let age = prompt('Enter your age');
// if(age>=18){
//     console.log(`You are eligible to vote`);
// }
// else
//     console.log("You're not eligible to vote!");


/* Activity 2: Nested If-Else Statements  */
//Task 3 : Write a program to find the largest of three numbers using nested if-else statements.
// let num1 = prompt('Enter the first number');
// let num2 = prompt('Enter the second number');
// let num3 = prompt('Enter the third number');
// if(num1>num2){
//     if(num1>num3){
//         console.log(`${num1} is the largest number`);
//     }
//     else{
//         console.log(`${num3} is the largest number`);
//     }
// }
// else if(num2>num1){
//     if(num2>num3){
//         console.log(`${num2} is the largest number`);
//     }
//     else{
//         console.log(`${num3} is the largest number`);
//     }
// }
// else if (num3>num1){
//     if(num3>num2){
//         console.log(`${num3} is the largest number`);
//     }
//     else{
//         console.log(`${num2} is the largest number`);
//     }
// }
// else{
//     console.log("All numbers are equal");
// }

/* Activity 3: Switch Case */
//Task 4: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console.
// let day = prompt("Enter the no. of day of the week ");
// switch(day){
//     case "1":
//         console.log("Today is Monday");
//         break;
//     case "2":
//         console.log("Today is Tuesday");
//         break;
//     case "3":
//         console.log("Today is Wednesday");
//         break;
//     case "4":
//         console.log("Today is Thursday");
//         break;
//     case "5":
//         console.log("Today is Friday");
//         break;
//     case "6":
//         console.log("Today is Saturday");
//         break;
//     case "7":
//         console.log("Today is Sunday");
//         break;
// }

//Task 5: Write a program that uses a switch case to assign a grade("A","B","C","D","F") based on a score and log the grade to the console.
// let score = prompt("Enter your score between 1 to 100");
// switch(true){
//     case score>=90:
//         console.log("Grade A");
//         break;
//     case score>=80:
//         console.log("Grade B");
//         break;
//     case score>=70:
//         console.log("Grade C");
//         break;
//     case score>=60:
//         console.log("Grade D");
//         break;
//     default:
//         console.log("Grade F");
//}

/* Activity 4: Conditional (Ternary) Operator */
//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
// let num = prompt("Enter a number");
// let result = num % 2 === 0 ? "Even" : "Odd";
// console.log(`Number is ${result}`);

/*Activity 5: Combining Conditions */
//Task 7: Write a program to check if a year is a leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400)
// let year = prompt("Enter a year");
// if((year%4)===0){
//     if((year%100)===0){
//         if((year%400)===0){
//             console.log(`Year ${year} is a leep year`)
//         }
//         else{
//             console.log(`Year ${year} is not a leap year`)
//         }
    
//     }
//     else{
//         console.log(`Year ${year} is a leap year`)
//     }  
// }
// else{
//     console.log(`Year ${year} is not a leap year`)
// }


/* Feature Request */
//1.Number Check Script: Write a script that checks if a number is positive, negative or zero using if-else statements and logs the result.
let number = prompt("Enter a number");
if(number>0){
    console.log(`${number} is positive`);
}
else if (number<0){
    console.log(`${number} is negative`);
}
else{
    console.log(`${number} is zero`);
}

//2.Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
let age = prompt("Enter your age");
if(age>=18){
    console.log(`Age ${age} is eligible to vote`);
}
else{
    console.log(`Age ${age} isn't eligible to vote`);
}

//3.Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number(1-7) and logs the day name.
let day= prompt("Enter the day number between 1 to 7 ");
switch(day){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;    
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Please Enter number between 1 to 7!");
}

//4. Grade assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
let score = prompt("Enter your score between 0 to 100");
switch(true){
    case score>=90 && score<=100:
        console.log("Grade is A");
        break;
    case score>=80 && score<90:
        console.log("Grade is B");
        break;
    case score>=70 && score<80:
        console.log("Grade is C");
        break;
    case score>=60 && score< 70:
        console.log("Grade is D");
        break;
    case score>=50 && score< 60:
        console.log("Grade is E");
        break;
    case score>=0 && score< 50 :
        console.log("Grade is F");
        break;
    default:
        console.log("Please enter score between 1 to 100..."); 
}

//5. Leap Year Check script: Write a script that checks if a year is a leap year using multiple consitions and logs the result.
let year = prompt("Enter a year ");
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap year");
        }
        else{
            console.log("Not a Leap year");
        }
    }
    else{
        console.log("Leap year");
    }   
}
else{
    console.log("Not a Leap Year");
}