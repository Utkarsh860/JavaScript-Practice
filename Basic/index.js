
//                    <---------- Case-01 ---------->
// using Semicolon
// alert("Alert 01");
// alert("Alert 02");

// if  we doesn't use semicolon still the output is same as above line 4 & 5
// alert("Alert 01 ")
// alert("Alert 02")

// another Ex.
// alert(1+2+2);


//                    <---------- Case-02 ---------->
// If you’re curious to see a concrete example of such an error, check this code out:
// alert("I'm JavaScript !");
// [1,2].forEach(alert); 
//  For now, just remember the result of running the code: it shows Hello, then 1, then 2.

// Now let’s remove the semicolon after the alert:
alert("I'm JavaScript !")
[1,2].forEach(alert);
// If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.
// bcoz the engine seems like -- alert("I'm JavaScript !")[1,2].forEach(alert);


//                    <---------- JS comments ---------->

// Example of  SIingle line comment

/*
Example 
of
Multi line
comments
*/

