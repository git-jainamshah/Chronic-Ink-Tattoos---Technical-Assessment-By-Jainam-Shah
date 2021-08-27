function isPalindrome(inputString) {
  inputString = inputString.toLowerCase();
  let len = inputString.length;
  var reversedString = "";
  let i = len;
  while (i >= 0) {
    reversedString = reversedString + inputString.charAt(i);
    i--;
  }

  if (inputString === reversedString) {
    return true;
  } else {
    return false;
  }
}
