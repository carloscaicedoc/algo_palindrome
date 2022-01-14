/* 
  String: Is Palindrome?
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  Do not ignore spaces, punctuation and capitalization
 */

  const str1 = "a x a";
  const expected1 = true;
  
  const str2 = "racecar";
  const expected2 = true;
  
  const str3 = "Dud";
  const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
  
// PALINDROME FUNCTION

  function isPalindrome(str) {
      for (let i = 0; i < str.length/2; i++)
      if (str[i] != str[str.length-1-i]){
          return false
      }
      return true
  }

  console.log(isPalindrome(str1))
  console.log(isPalindrome(str2))
  console.log(isPalindrome(str3))
  console.log(isPalindrome(str4))
  
  console.log(isPalindrome("Oto"))
  console.log(isPalindrome("oto"))
  console.log(isPalindrome("OTO"))
  
  console.log(isPalindrome("Salasalas"))
  console.log(isPalindrome("oh Oto h"))
  console.log(isPalindrome("oto"))
  console.log(isPalindrome("madam"))
  console.log(isPalindrome("civic"))
  console.log(isPalindrome("Hannah"))
