//-----------------------------Some important Points------------------------//
/*
To reduce the chances of havong bugs in our code, you need to understand the consept of Mutablility & immutaabilty in JavaScript

Mutability: 
                 It refers to data types that can be accessed and changed after they have been created and stored in memory.

                 that means Reference Data types are mutable which are  following
                 -->
                      .Function
                      .Arrays
                      .Objects
                 

Immutability:
                    On the other hand, refers to data types that you can't change after creating them but that you can still access in the memory.

                    so that means Primitive Data types are Immutable which are following -->
                          .Number
                          .String
                          .Boolean
                          .Symbol
                          .null
                          .undefined
                          .BigInt
                    
*/

//-----------------------------Some basic things about an object------------------------//

/*
Object:  
           They are  used to store keyed collections of various data and more complex    entities.

           An object can be created with figure brackets {…} with an optional list of properties.
           A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
*/

//-----------------------------Create an Object------------------------//
//Method: 01 
// const obj_01 = new Object(); 
// console.log(obj_01);  // Empty Object

//Method: 02 
// const obj_02 = {};
// console.log(obj_02);  // Empty Object
/*
Usually, the figure brackets {...} are used. That declaration is called an object literal
*/

//----------------Put some properties as Key: value pairs-----------------//

// Create an object
const user = {              // an object
  name : "Harry",         // by key "name" store value "Harry"
  age : 18                    // by key "age" store value 18
};





/*
We can add,
             remove and
            read files from it at any time.
            */

//----Get property value: Property values are accessible using the ( . )dot notation----//

// alert(user.name);  // "Harry"
// alert(user.age);    // 18

//---------------Add property value: The value can be of any data type---------------//

// user.isAdmin;
// alert(user.isAdmin);  // undefined

// user.isAdmin = true; 
// alert(user.isAdmin);  // true

//
//---------------To remove a property, we can use the delete operator:---------------//

// delete user.isAdmin;

/*
Note: 

The last property in the list may end with a comma:

                    let user = {
                      name: "John",
                      age: 30,
                    }
That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.
*/

//-------We can also use multiword property names, but then they must be quoted:-------//

var student = {
  name : "Harry Langford",
  branch : "Information Technology",
  "Favorite Language" : "JavaScript",  // quotes must 
};

/*
Note: 
For multiword properties, the dot access doesn’t work:
*/
// alert(student."Favorite Language")   // It gives you Syntax Error
alert(student["Favorite Language"]);  // "JavaScript"

//so that means for multiword property ---> square bracket Notation is used.

//--------------- Similarly, to add a multiword property---------------//

student["your Role"] = "web Developer";
alert(student["your Role"]);  // "web developer"

//--------------- Similarly, to delete a multiword property---------------//

delete(student["your Role"]);
alert(student["your Role"]);  // undefined

/*Computed properties: 
                                 We can use square brackets in an object literal, when creating an object. That’s called "computed properties".
*/

 