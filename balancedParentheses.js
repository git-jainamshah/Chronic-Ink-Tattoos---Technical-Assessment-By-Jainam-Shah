function areParenthesesBalanced(inputString) {
  var count = 0;
  let flag = true;
  for (let i = 0; i < inputString.length; i++) {
    if (count >= 0) {
      if (inputString.charAt(i) == "(") {
        count++;
      } else if (inputString.charAt(i) == ")") {
        count--;
      }
    } else {
      flag = false;
    }
  }

  if (flag && parseInt(count) == 0) {
    return true;
  } else {
    return false;
  }
}
