/**
 *  write a function that accept two strings as arguments
 *  determine and store length of both strings in new variable
 *  - determine a short string and a long string
 *    if the length of str1 is greater than str2
 *      set str1 as longStr
 *      set str2 as shortStr
 *    else 
 *      vice versa
 *  
 *  print shortStr + longStr + shortStr
 * 
 */

function shortLongShort(str1, str2) {
  let shortStr;
  let longStr;
  if(str1.length > str2.length) {
    longStr = str1;
    shortStr  = str2;
  } else {
    longStr = str2;
    shortStr  = str1;
  }
  console.log(shortStr + longStr + shortStr);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"