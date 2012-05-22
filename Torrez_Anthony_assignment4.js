var lib = new tonysLib();


// TESTING FUNCTIONS TO SEE IF THEY ARE WORKING

// Check 01 - Does A String Follow A Phone Number Pattern?

console.log( lib.isAPhoneNum("9225-454-5265"));
console.log( lib.isAPhoneNum("925-4554-5265"));
console.log( lib.isAPhoneNum("925-454-52265"));
console.log( lib.isAPhoneNum("925-454-5265"));
console.log( lib.isAPhoneNum("92-454-5265"));
console.log( lib.isAPhoneNum("925-45-5265"));
console.log( lib.isAPhoneNum("925-454-525"));

// Check 04 - Title-case A String, Split Into Words, Then Uppercase The First Letter Of Each Word.

console.log( lib.propCase("this is a test"));

// Check 05 - Given A String That Is A List Separated By ","s Change The Separator To Another Separator Such As "/".

console.log( lib.myStr("123,456,789,10,11,12,13,14"));

// Check 06 - Format A Number To Use A Specific Number Of Decimal Places, As For Money: 2.1 -> 2.10

console.log( lib.decimal2(987.2349));

// Check 09 - Given A String Version Of A Number Such As "42", Return A Value As An Actual Number, Such As 42.  

console.log( lib.numChk(42));

// Check 08 - Find The Number Of Days Difference Between 2 Dates.

// console.log( lib.tweenDays("April 29, 1959","July 4, 2012"));

