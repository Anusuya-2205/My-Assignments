// 1.  Declare variables using var, let, and const
var a = 10;
let b  = 10;
const c = 10; 

console.log(a);
console.log(b);
console.log(c);

// 2. re-declaring the same variable
// allowed for var and Not allowed for let and const (SyntaxError)

// using var
var a= 10;
var a= 20;
console.log(a);

//using let
let b = 20;
// let b = 30;
console.log(b);

// using const
const c = 30;
// const c =50;
console.log(c);

// 3. re-assigning a value to the variable.
// Allowed for let
// Not allowed for const (TypeError)

// var
var a = 10;
a = 20;
console.log(a);

// let
let b = 30;
b = 40;
console.log(b);

// const
const c = 50;
// c = 60; // TypeError
console.log(c);

// 4. Check the behavior using a block ( { } ) and function (function() {})
// x is accessible outside bltxk
// y and z are not accessible (ReferenceError)

// A. Block scope using { }
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);  // output :
console.log(b);  //10
console.log(c);  //ReferenceError: b is not defined

// B. Function scope using function()

function test() {
    var a = 10;
    let b = 20;
    const c = 30;
}

test();

console.log(a);  //ReferenceError: a is not defined

// 5. Access the variable before declaration to observe hoisting behavior.
// hoisting

//using var
console.log(a);
var a = 10;  //undefined
console.log(a);

//using let
console.log(b);
let b = 20;  //ReferenceError: Cannot access 'b' before initialization

//using const
console.log(c);
const c = 30;  //ReferenceError: Cannot access 'c' before initialization

