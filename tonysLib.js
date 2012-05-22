var tonysLib = function () { 

//    01 - Does A String Follow A Phone Number Pattern? 

     function isAPhoneNum (val) {
	      var regexPhone = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;       // See  REGEX BREAKDOWN EXPLANATION     
		  if (regexPhone.test(val)) {                                                                           // NESTED CONDITIONAL INSIDE FUNCTION 
    			var formattedPhoneNumber = val.replace(regexPhone, "$1-$2-$3");      
        		return ("Yes, " + val + " follows a phone number pattern.");
		 } else {
   		 return ("Nope, " + val + " does not follow a phone number pattern");
		 }		 
     };
     
//    REGEX BREAKDOWN EXPLANATION:
//    / - begins and ends the string,   ^  - matches beginning of input,  \ - indicates next character is special and not interpreted literally,  ? - Match 
//    preceding character 0 or 1 time.  (\d{3})  - this is the area code between parans. \d = any digit, 0-9 and {3} indicates to do there are 3 digits.  
//     [-. ]  indicates that the 3 digits in the area code are separated from the city code by either a dash, a period, or a space.  This patter continues
//    for the next 3 digits of the city exchange code and then the station code, which has 4 digits .  Finally, the $ indicates the end of input (opposite
//    of the ^), and the / to close the string. 
 
     
     
//    04 - Title-case A String, Split Into Words, Then Uppercase The First Letter Of Each Word.
     
     function propCase (val) {
	      var strChg = val;
               return strChg.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
     };      //  
     

//	  05 - Given A String That Is A List Separated By ","s Change The Separator To Another Separator Such As "/".
     
     function myStr (val) {
          var re = /,/gi;  
          var getStr = val;
               var newStr = getStr.replace(re, "/");
               return newStr;
    };


//     06 - Format A Number To Use A Specific Number Of Decimal Places, As For Money: 2.1 -> 2.10
    
    function decimal2 (val) { 
         var chgNum = val;
         var newNum = chgNum.toFixed(2);  
              return ("$" + newNum);	 
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
    
    return {
         "isAPhoneNum": isAPhoneNum,
         "propCase": propCase,
         "myStr": myStr,
         "decimal2": decimal2,
//         "tweenDays": tweenDays,
         "numChk": numChk
    }
};