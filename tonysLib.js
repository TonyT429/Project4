var tonysLib = function () { 

//    01 - Does A String Follow A Phone Number Pattern? 

     function isAPhoneNum (val) {
	      var regexPhone = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;                           // See  REGEX BREAKDOWN EXPLANATION     
		  if (regexPhone.test(val)) {                                                                           // NESTED CONDITIONAL INSIDE FUNCTION 
//    			var formattedPhoneNumber = val.replace(regexPhone, "$1-$2-$3");      
        		return ("Yes, " + val + " follows a phone number pattern.");
		 } else {
   		 return ("Nope, " + val + " does not follow a phone number pattern");
		 }		 
     };
     
//    REGEX BREAKDOWN EXPLANATION:
//    / -  at the beginning and end of the string,   ^  - matches beginning of input,  \ - indicates next character is special and not interpreted literally,  
//    ? - Match preceding character 0 or 1 time.  (\d{3})  - this is the area code between parans. \d = any digit, 0-9 and {3} indicates to do there 
//    are 3 digits.   [-. ]  indicates that the 3 digits in the area code are separated from the city code by either a dash, a period, or a space.  This 
//    pattern continues for the next 3 digits of the city exchange code and then the station code, which has 4 digits .  Finally, the $ indicates the end
//    of input (opposite of the ^), and the / to close the string. 
     
     
//    02 - Does A String Follow An aaa@bbb.ccc Pattern Like An Email Address?

	function isAnEmailAddr (val) {
	      var regexEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;       // See  REGEX BREAKDOWN EXPLANATION     
		 	    if (regexEmail.test(val)) {                                                                             // NESTED CONDITIONAL INSIDE FUNCTION      
        		return ("Yes, " + val + " follows a Email number pattern.");
		  } else {
   		 		return ("Nope, " + val + " does not follow a Email number pattern");
		 }		 
     };
     
//    REGEX BREAKDOWN EXPLANATION:
//    / -  at the beginning and end of the string,   ^  - matches beginning of input,  \ - indicates next character is special and not interpreted literally,  
//    ? - Match preceding character 0 or 1 time.  (\d{3})  - this is the area code between parans. \d = any digit, 0-9 and {3} indicates to do there 
//    are 3 digits.   [-. ]  indicates that the 3 digits in the area code are separated from the city code by either a dash, a period, or a space.  This 
//    pattern continues for the next 3 digits of the city exchange code and then the station code, which has 4 digits .  Finally, the $ indicates the end
//    of input (opposite of the ^), and the / to close the string. 
     
     
//    04 - Title-case A String, Split Into Words, Then Uppercase The First Letter Of Each Word.
     
     function propCase (val) {
	      var strChg = val;
               return strChg.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
     };      
     
//  / - at the beginning and end of the string.  \w - matches any alphanumeric character including underscore.  \S matches a single character.
//  * - matches the preceding character 0 or more times.  The g, outside the string means to do the match globally throughout the string.
     

//	  05 - Given A String That Is A List Separated By ","s Change The Separator To Another Separator Such As "/".
     
     function myStr (val) {
          var re = /,/gi;                //  variable re is set to the character ,   the gi says to match this globally throughout the string and ignore the case.
          var getStr = val;
               var newStr = getStr.replace(re, "/");
               return newStr;
    };


//     06 - Format A Number To Use A Specific Number Of Decimal Places, As For Money: 2.1 -> 2.10
    
    function decimal2 (val) { 
         var chgNum = val;
         var newNum = chgNum.toFixed(2);    // sets the decimal to 2 places
              return ("$" + newNum);	                 // adds the $ to precede the results to format to US currency.
     };
     
     
//    08 - Find The Number Of Days Difference Between 2 Dates.
/*     
     function tweenDays (val1, val2) {
          var date1 = val1;
          var date2 = val2;
          var aDay = (1000 * 60 * 60 * 24);
               daysTween = (Math.ceil((date2.getTime() - date1.getTime())/(aDay)));
               return daysTween;
    };
*/    


//	  09 - Given A String Version Of A Number Such As "42", Return A Value As An Actual Number, Such As 42.  

    function numChk (val) {
         var isNum = parseInt(val)
              return isNum;
    };
    
    
//     RETURN VALUES
    
    return {
         "isAPhoneNum": isAPhoneNum,
         "isAnEmailAddr": isAnEmailAddr,
         "propCase": propCase,
         "myStr": myStr,
         "decimal2": decimal2,
//         "tweenDays": tweenDays,
         "numChk": numChk
    }
};