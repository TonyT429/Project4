// SDI 1205 Assignment 4
// Student: Anthony Torrez
// Build a Library - a collection of functions reusable in future assignments


// Global Variables:

var chgStr = "this is a test";                                                  // problem 04
var aStr = "123,456,789,10,11,12,13,14";                            // problem 05
var myNumber = 40025.4                                                    // problem 06
var d1=new Date("April 29, 1959 12:00 PM"),                     // problem 08
      d2=new Date("July 4, 2012 03:30 AM");
var nuStr = "42";                                                                  // problem 09

// Need to complete at least 6 out of these 12.

// STRING:
// 01) Does a string follow a 123-456-7890 pattern like a phone number?

// 02) Does a string follow an aaa@bbb.ccc pattern like an email address?

// 03) Is the string a URL? (Does it start with http: or https:?)

// 04) Title-case a string (split into words, then uppercase the first letter of each word)

function propCase() {
	var strChg = chgStr;
    return strChg.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// 05) Given a string that is a list of things separated by a given string, as well as another 
// string separator, return a string with the first separator changed to the second:
// "a,b,c" + "," + "/" -> "a/b/c". 

function myStr () {
    var re = /,/gi;  
    var getStr = aStr;
    var newStr = getStr.replace(re, "/");
    return newStr;
    }

// NUMBER:
// **06) Format a number to use a specific number of decimal places, as for money: 2.1 -> 2.10

function decimal2() { 
    var chgNum = myNumber;
    var newNum = chgNum.toFixed(2);  
    return ("$" + newNum);	 
};

// 07) Fuzzy-match a number: is the number above or below a number within a certain percent?

// **08) Find the number of hours or days difference between two dates.  This one gives the difference in days

function tweenDays() {
    var aDay = (1000 * 60 * 60 * 24);
    daysTween = (Math.ceil((d2.getTime()-d1.getTime())/(aDay)));
    return daysTween;
    }


// **09) Given a string version of a number such as "42", return a value as an actual Number, such as 42.  

function numChk () {
    var isNum = parseInt(nuStr)
    return isNum;
    }

// ARRAY
// 10) Find the smallest value in an array that is greater than a given number.

// 11) Find the total value of just the number in an array, even if some of the items are not numbers.

// 12) Given an array of objects and the name of a key, return the array sorted by the value of 
// that key in each of the objects: "a" + [{a:2}, {a:3}, {a:1}] -> [{a:1}, {a:2}, {a:3}].

//  Returned Values

console.log(propCase());                          // problem 04
console.log(myStr());                                // problem 05
console.log(decimal2());                           // problem 06
console.log(tweenDays());                        // problem 08
console.log(numChk());                            // problem 09


alert("JavaScript works!");