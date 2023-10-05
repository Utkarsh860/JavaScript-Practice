
// ---------------------------------User Interaction----------------------------------//

// ----------Now, Talk about some couple of functions to interact with user----------//
/*
These are following  --->
1. alert()
2. prompt()
3.confirm()
*/

// -------------------------Talk About alert() Function------------------ ---------//
/*
It shows a message and wait for the user to press "OK"
*/
alert ("Hello JavaScript lover ⚠️");

// -------------------------Talk About prompt() Function------------------ ---------//
/*
It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

   Basic syntax  ---->  result = prompt(title, [default]);
The function prompt accept two parameter.
1. title -
             The text to show the visitor.
2.default -
            An optional second parameter, the initial value for the input field.
            Note: 
                     The square brackets around default in the syntax above denote that   the parameter is optional, not required.
*/

prompt("In which branch do you study ?");     //only shows modal window with text message
prompt("In which branch do you study ?", "IT");    //  set default text "IT"

//Now let's store the user input value 

var branch = prompt("In which branch do you study ?", "IT");
alert(`User study in ${branch} branch`);

// -------------------------Talk About confirm() Function------------------ ---------//
/*
Basic Syntax: 
                   const result = confirm(Question);
The function confirm shows a modal window with a question and two buttons: OK and Cancel.
The result is true if OK is pressed and false otherwise.
*/

var result = confirm("Are you web developer?");
alert(result);  // true if OK is pressed and false otherwise.



// --------------------------------Type Conversion----------------------------------//

/*
---> String conversion:
                                      .Happens when we need the string form of a value.
                                      .Use String() value function to change any value into string.
*/
let boolValue = true; 
alert(typeof(boolValue)); // boolean
alert( typeof String(boolValue)); //string

let intValue = 152375;
alert(typeof(intValue)); // number
alert( typeof String(intValue)); //string

let bigIntValue = 142413516313523743454n;
alert(typeof(bigIntValue)); //BigInt
alert( typeof String(bigIntValue)); //string

let nullValue = null;
alert(typeof(nullValue)); // Object
alert( typeof String(nullValue)); //string

let undeValue;
alert(typeof(undeValue)); // undefined
alert( typeof String(undeValue)); //string

/*
⚠️Note: alert() function is also automatically converts any value to a string to show it.
*/

/*
---> Number conversion: 
                                       .We can use the Number(value) function to explicitly convert a value to a number.
*/
let str = "Harry";
alert(typeof(str)); // string
alert(typeof(Number(str))); // number

/*
⚠️Note: Numeric conversion in mathematical functions and expressions happens automatically.
*/
alert (Number("6"/"2"));  // 3

/*
⚠️Note: For multiword string, the result of such a conversion is NaN
*/
let msg = Number("Hello ! How are you?");
alert(msg); // NaN, conversion failed

// ------------------------Number Conversion Rules------------------------------//
/*

undefined	   ----------->                NaN
null	           ----------->                   0
true and false  ----------->             	1 and 0
string	  ----------->  
                            Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
*/
alert(Number(undefined)) //NaN
alert(Number(null)) // 0
alert(Number(true)) // 1
alert(Number(false)) // 0

/*
---> Boolean Conversion: 
                                       .We can use the Boolean(value) function to explicitly convert a value to a Boolean.
*/
// ------------------------Boolean Conversion Rules------------------------------//
/*
.Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
.Other values become true.
*/
alert(Boolean(""));   // false
alert(Boolean(0));  // false
alert(Boolean(null));  // false
alert(Boolean(undefined));  // false
alert(Boolean(NaN));  // false

//⚠️ Note: 
alert(Boolean("true")); // ture
alert(Boolean("0")); // ture
alert(Boolean("Hello")); // ture
alert(Boolean( " ")); // spaces, also true (any non-empty string is true)


/*
⚠️⚠️⚠️ We will discuss about "Object to Primitive Conversion" in upcoming session⚠️⚠️⚠️
*/

