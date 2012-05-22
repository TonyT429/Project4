var tonysLib = function () { 

     function isAPhoneNum (val) {
	      var regexPhone = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
		  if (regexPhone.test(val)) {
    			var formattedPhoneNumber = val.replace(regexPhone, "$1-$2-$3");
        		return ("Yes, " + val + " follows a phone number pattern.");
		 } else {
   		 return ("Nope, " + val + " does not follow a phone number pattern");
		 }		 
     };
     
     function propCase (val) {
	      var strChg = val;
          return strChg.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
     };
     
     
     function myStr (val) {
          var re = /,/gi;  
          var getStr = val;
          var newStr = getStr.replace(re, "/");
          return newStr;
    };
    
    
    function decimal2 (val) { 
         var chgNum = val;
         var newNum = chgNum.toFixed(2);  
         return ("$" + newNum);	 
     };
     
/*     
     function tweenDays (val1, val2) {
          var date1 = val1;
          var date2 = val2;
          var aDay = (1000 * 60 * 60 * 24);
          daysTween = (Math.ceil((date2.getTime() - date1.getTime())/(aDay)));
          return daysTween;
    };
*/    
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