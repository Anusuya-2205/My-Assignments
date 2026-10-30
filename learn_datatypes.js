//var, let, const -- datatypes
// number - to store a numeric values
var age = 29;
console.log(age);
console.log(typeof age);

//string -- used to store text values
var Name = "Anu"
console.log(Name);
console.log(typeof Name);

//boolean -- will answer to yes(true) /no(false)
var isWorking = true;
console.log(isWorking);
console.log(typeof isWorking);

//undefined -- a variable has been declared but not assigned a value
var  phoneNumber;
console.log(phoneNumber);
console.log(typeof phoneNumber);

//null --purposfully providing no values for a variable (intentional absence of a value.)
//null which is empty and it will be returned as object, it is historic JS error
var userName = null;
console.log(userName);
console.log(typeof userName);

//bigInt -- large integer that cannot be represented by the number datatypes.
//is used to store very large integers that exceed the safe integer limit of the Number data type.
var population = 12345678901234567890n;
console.log(population);
console.log(typeof population);

//Maximum safe integer -- the maximum safe integer is 9007199254740991.
//It is represented by the constant Number.MAX_SAFE_INTEGER.
var x =  Number.MAX_SAFE_INTEGER;
console.log(x);
console.log(typeof x);

