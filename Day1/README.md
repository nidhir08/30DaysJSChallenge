Day 1 - JS Challenge 

JavaScript Variables and Data Types
In JavaScript, variables are containers used to store data values. The language provides three keywords—var, let, and const—for declaring variables, each with distinct characteristics regarding scope, hoisting, and mutability. Understanding these differences is essential for writing robust and maintainable code.

Variable Declaration:
1. var
Scope: Function-scoped. Variables declared with var are accessible within the function they are declared in, or globally if declared outside a function.
Re-declaration and Re-assignment: Variables declared with var can be re-declared and updated within the same scope.
2. let
Scope: Block-scoped. Variables declared with let are only accessible within the block (delimited by {}) they are declared in.
Re-declaration and Re-assignment: Variables declared with let cannot be re-declared within the same scope but can be updated.
3. const
Scope: Block-scoped, similar to let.
Re-declaration and Re-assignment: Variables declared with const cannot be re-declared or reassigned. However, if the variable is an object or array, the contents can still be modified.

Data Types
JavaScript is a dynamically typed language, meaning variables do not have a fixed type and can hold values of any type.
Some examples of primary datatypes are:
1. Number

Represents both integer and floating-point numbers. Special numeric values like Infinity and NaN (Not-a-Number) also belong to this category.

2. String

A sequence of characters used to represent text. Strings can be enclosed in single ('), double ("), or backticks ( `) for template literals.

3. Boolean

Represents logical values, true or false.

4. Object

A collection of key-value pairs, where keys are strings (or symbols) and values can be any type, including other objects.

5. Array

An ordered collection of values, which can be of any type. Arrays are a special kind of object in JavaScript.

6. Other Types

Undefined: A variable that has been declared but not assigned a value is of type undefined.

Null: Represents the intentional absence of any object value and is of type object.

Symbol: A unique and immutable data type used to create unique identifiers for objects.

BigInt: Represents integers with arbitrary precision, allowing the representation of numbers larger than Number.MAX_SAFE_INTEGER.
