/*
Programming languages that allows such things such as JavaScript called "Dynamically typed" means that there exist data types but variable are not bound to any of them.
*/ 

/*
1. Number -->
                        The number type represents both integer & floating-point numbers.

                        Note: Besides regular no., there are so called "special Numeric values" which also belong to this data type.
                        . Infinity is a special value in maths that's represent a number that is larger than any real number.
                        Most programming languages have many number types:

                        Whole numbers (integers):
                        byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

                        Real numbers (floating-point):
                        float (32-bit), double (64-bit).

                        Javascript numbers are always one type:
                        double (64-bit floating point).
*/ 

alert(1/0);    // Infinity
alert(Infinity + 10);  // Infinity 

/*
. -Infinity represents a number that is smaller than any real number. 
*/

alert(-1/0);  // -Infinity
// alert(-Infinity + 10);  // -Infinity 
// alert(-Infinity - 10);  // -Infinity 

/*
.NaN stands for "Not a Number" which often used to indicate an error or an undefined value in calculations.
*/

alert("not a num"/2);  // NaN
alert(NaN + 1);  // NaN
alert(Math.sqrt(-1));  // NaN

/*
2. String --> 
                    A string in JavaScript is sequence of character, number etc. surrounded  by quotes.

                    There are 3 types of quotes. 
                    .Double Quotes --->  "Hello" 
                    .Single Quotes ---> 'Hello'
                    .BackTicks ---> `Hello`
                    Note : BackTicks are "extended functionality" quotes they allow to embed variable and expression into a string by wrapping them in 
                    ${ ..... }
                    This terminology is known as "Template Literal".
*/

const name = "Anu";
// Embed a Variable
alert(`Hello, ${name}`);

/*
3.Boolean (Logical Type) -->
                                         It has only 2 values : true & false
                                         This type is commonly used to store yes/no.

                                                true  ---->  Yes
                                                false  ---->  No
                                         Boolean values also come as a result of comparison. 
*/

alert(4>1);  // true bcoz 4 is greater than 1.
alert(4<1); // false bcoz 4 is not less than 1.

/*
4. The "null" Value -->
                                    It forms a separate type of its own which contains only the null value:

                                    In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

                                    It’s just a special value which represents “nothing”, “empty” or “value unknown”.
*/

var age = null;
// In some mathematical expressions null is work like zero.
alert(age); // null
alert(age + 6); // 0 + 6  = 6 
alert(age*6); // 0*6 = 0 
alert(1/age); // 1 / 0 = Infinity

/*
5. The "undefined" Value -->
                                              The meaning of undefined is “value is not assigned”.

                                              If a variable is declared, but not assigned, then its value is undefined
*/
var a;
alert(a); // shows "undefined"

//--------------------Difference between null & undefined---------------------------//
/*
Undefined means a variable has been declared but has yet not been assigned a value.

 Null is an assignment value. It can be assigned to a variable as a representation of no value.
*/
//--------------------------------------------------------------------------------------//


/*
6. BigInt --> 
                    For most purpose  - ( 2 to the power 53 -1 ) to  +(2 to the power 53)
                    numbers range is quite enough but sometimes we need the entire range of really big integer e.g. for cryptography or microsecond-precision timestamps.

                    It is created by appending n to the end of an integer.

                    Note: BigInt is supported in FireFox/chrome/Edge/Safari but not in IE.
*/

const a = 15761531235529025629021927n;




/*
The typeof operator --> 
                                      The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

                                      A call to typeof x returns a string with the type name.
*/
alert(typeof(undefined)) // "undefined"

alert(typeof(0)) // "number"

alert(typeof(10n)) // "bigint"

alert(typeof(true)) // "boolean"

alert(typeof("foo")) // "string"


alert(typeof(Math)) // "object"  (1)

alert(typeof(null)) // "object"  (2)

alert(typeof(alert)) // "function"  (3)


/*
<----------    Note : We will discuss the remaining data types separately   ---------->
*/