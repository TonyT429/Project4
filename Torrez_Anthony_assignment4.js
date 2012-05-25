var lib = new tonysLib ();

// Global Variables (if I ever get problem 12 to work).
people = [
       { name: "Gina", age: 55, hair: "blond"},
       { name: "Nichol", age: 24, hair: "brunette"},
       { name: "Elaine", age: 46, hair: "redhead"}
];

// TESTING FUNCTIONS TO SEE IF THEY ARE WORKING

// Check 01 - Does A String Follow A Phone Number Pattern?

console.log("     Problem 1");
console.log( lib.isAPhoneNum("9225-454-5265"));
console.log( lib.isAPhoneNum("925-4554-5265"));
console.log( lib.isAPhoneNum("925-454-52265"));
console.log( lib.isAPhoneNum("925-454-5265"));
console.log( lib.isAPhoneNum("92-454-5265"));
console.log( lib.isAPhoneNum("925-45-5265"));
console.log( lib.isAPhoneNum("925-454-525"));

// Check 02 - Does a string follow an aaa@bbb.ccc pattern like an email address?

console.log("     Problem 2");
console.log( lib.isAnEmailAddr('TonyT429@fullsail.edu'));
console.log( lib.isAnEmailAddr('TonyT429#fullsail.edu'));
console.log( lib.isAnEmailAddr('a.torrez@comcast.net'));
console.log( lib.isAnEmailAddr('anthony-torrez@comcast,org'));
console.log( lib.isAnEmailAddr('TonyT-429@fullsail.edu'));

//  03 - Is The String A URL? 

console.log("     Problem 3");
console.log( lib.urlChk("https://www.go-pro.com"));
console.log( lib.urlChk("http://www.comcast.net"));
console.log( lib.urlChk("http:\\www.go-pro.com"));
console.log( lib.urlChk("www.go-pro.com"));
console.log( lib.urlChk("go-pro.com"));
console.log( lib.urlChk("nttp://www.go-pro.com"));
console.log( lib.urlChk("http;//.www.go-pro.com"));
console.log( lib.urlChk("http://www.lukew.com/ff/entry.asp?1071"));

// Check 04 - Title-case A String, Split Into Words, Then Uppercase The First Letter Of Each Word.

console.log("     Problem 4");
console.log( lib.propCase("this is a test"));

// Check 05 - Given A String That Is A List Separated By ","s Change The Separator To Another Separator Such As "/".

console.log("     Problem 5");
console.log( lib.myStr("123,456,789,10,11,12,13,14"));

// Check 06 - Format A Number To Use A Specific Number Of Decimal Places, As For Money: 2.1 -> 2.10

console.log("     Problem 6");
console.log( lib.decimal2(987.2349));

// 07) Fuzzy-match a number: is the number above or below a number within a certain percent?

console.log("     Problem 7");
console.log( lib.fuzzNum(29, 40));
console.log( lib.fuzzNum(40, 29));
console.log( lib.fuzzNum(29, 29));

// Check 08 - Find The Number Of Days Difference Between 2 Dates.

console.log("     Problem 8");
console.log( lib.tweenDays("April 29, 1959","July 18,1961"));
console.log( lib.tweenDays("April 29, 1959","May 24, 2012"));

// Check 09 - Given A String Version Of A Number Such As "42", Return A Value As An Actual Number, Such As 42.  

console.log("     Problem 9");

console.log( lib.numChk(42));

//  Check 12 - Given An Array Of Objects And The Name Of A Key, Return The Array Sorted By The Value Of That Key In Each Of The Objects



