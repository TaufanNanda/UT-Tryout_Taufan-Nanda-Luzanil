function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return console.log('false');
   }
 }
 return console.log('true');
}
palindrome("Cigar? Toss it in a can. It is so tragic");
palindrome("I did, did I?");
palindrome("Red rum, sir, is murder");
palindrome("Eva, can I see bees in a cave?");
palindrome("Hello World");