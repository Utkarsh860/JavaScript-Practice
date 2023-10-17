
// -----------------Before we move on Let's grasp some common terminology---------------//
/*
1.Operand: 
                 An operand is a term used in computing, programming, and mathematics to refer to a value or expression that is used to perform an operation.

                 For instance:
                                      in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2.

                 Sometimes, people call these “arguments” instead of “operands”.
*/

// ---------------------------------Unary operator -------------------------------//

/*
An operator is called "unary" if it has a single operand.
Ex. the unary negation (-) reverses the sign of a number:
*/
let a = 2;
console.log(-a); // -2 -->unary negation was applied.


// ---------------------------------Binary operator -------------------------------//

/*
An operator is called "Binary" if it has  double operand.
Ex.
*/
var x = 5;
let y = 3;
console.log(x-y); // 2, binary minus subtracts values

/*
Basic Arithmetic Operator:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division ( / ) 
⚠️Note ---->
                5. Modulus( remainder ) ( % ) -
                                                                 The remainder operator %, despite its appearance, is not related to percents.

                                                                  The result of a % b is the remainder of the integer division of a by b.

                6. Exponentiation (ES2016) (**) -
                                                                 The exponentiation operator a ** b raises a to the power of b.
*/

console.log(5%2); // 1, the remainder of 5 divided by 2
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8

/*
 ⚠️Note: 
          Just like in maths, the exponentiation operator is defined for non-integer numbers as well.
*/

console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


// ------------------------String concatenation with binary (+)-----------------------//

let str = "Hello" + "world";
console.log(str); // Helloworld
/*
⚠️Note:
            that if any of the operands is a string, then the other one is converted to a string too.
*/
console.log("2" +1) //  "21"
console.log(2 +"1") // "21"

// Some complex Example -->
console.log(2 + 2 + '1' ); // "41" and not "221"
/*
Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.
*/

console.log('1' + 2 + 2); // "122" and not "14"
/*
Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".
*/

/*
The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

Here’s the demo for subtraction and division:
*/

console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

// ------------------------Numeric conversion, unary +-----------------------//

/*
The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
*/
let i = "2";
// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0
console.log(typeof(+i));  //  Number    .use Number(.... ) ---> The longer variant 

// ---------------------------------Assignment Operator--------------------------------//
/*
An assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.
let take an Ex. 
                    let x = 2 * 2 + 1
                                            Step :01 the calculations are done first (5)
                                            Step :02 Then assign to x
*/
var x = 2 * 2 + 1;
console.log(x);

/*
⚠️Note :          Assignment = returns a value
                    ----->The call x = value writes the value into x and then returns it.
                       
*/
var m = 1;
var n = 2;

 var o = 3 - (m = n + 1);  // that means First n assign to m  then operation perform

 console.log( m );  // 3
 console.log( o );  // 0

/*
Chaining assignments : Another interesting feature is the ability to chain assignments.
*/
var m,n,o;
m = n = o = 2 + 2;
console.log( m ); // 4
console.log( n ); // 4
console.log( o ); // 4


// ---------------------------------Modify-in-place--------------------------------//
/*
----> Normal Zindagi : 
                                     let n = 2;
                                     n = n + 5;
                                     n = n * 2;

----> Mentos Zindagi : 
                                    let n = 2;
                                     n += 5;  now n = 7 (same as n = n + 5)
                                     n *= 2;   now n = 14 (same as n = n * 2)
*/
var no = 2;
no *= 3 + 5; // right part evaluated first, same as n *= 8
console.log( n );  // 16


// ---------------------------------Increment/decrement--------------------------------//
// Increment ++ increases a variable by 1
var p =3;
var q = p++; // works the same as p = p + 1, but is shorter
console.log(p); // 3
console.log(q); // 4


// Increment ++ increases a variable by 1
var r = p--; // works the same as p = p - 1, but is shorter
alert(r); // 2

/*
⚠️Important: 
                       Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
                  
*/

/*
The operator ++ and -- can be placed either before or after a variable.
*/

// ---> When the operator goes after the variable, it is in “postfix form”
//--->The “prefix form” is when the operator goes before the variable: ++counter / --counter .
/*---------🙄So what the difference between🙄---------
*/

let a1 = 5; 
console.log(a1++); // means first increment then print ---> 5
console.log(a1); // ---> 6
let b1 = 5;
console.log(++b1); // means first print then increment ---> 6

//----------------------------- Increment/decrement among other operators -------------------//

let num = 10; 
console.log( 2 * ++num); 
/*
Break this (2 * (num = num + 1));
---------->(2 * (num = 10 + 1));
---------->(2 * (num = 11));
----------> 22 
*/

//----------------------------Bitwise Operator----------------------//
/*
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

. AND ( & )
. OR ( | )
. XOR ( ^ )
. NOT ( ~ )
. LEFT SHIFT ( << )
. RIGHT SHIFT ( >> )
. ZERO-FILL RIGHT SHIFT ( >>> )
*/


//----------------------Comma Operator---------------------//
/*
The comma operator , is one of the rarest and most unusual operators.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
*/

let sum = (1+2, 3+4);
console.log(sum); // 7 (the result of 3 + 4)
/*
⚠️ Note: 
Comma has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.
*/


//---------------------------------------Thanks-----------------------------------------------//
