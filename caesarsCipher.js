function encryptCaesar(inputString, key) {
  parseInt((i = 1));
  key = parseInt(key);
  const baseAlphabates = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ceaserAlphabates = [];
  var encodedMessage = "";

  x = 25;
  for (i = 65; i <= 90; i++) {
    sum = i + key;
    if (sum > 90) {
      sum = 90 - x--;
      ceaserAlphabates.push(String.fromCharCode(sum));
    } else {
      ceaserAlphabates.push(String.fromCharCode(sum));
    }
  }

  for (i = 0; i < inputString.length; i++) {
    var index = baseAlphabates.indexOf(inputString[i]);
    var alphabate = ceaserAlphabates[index];
    encodedMessage = encodedMessage + alphabate;
  }
  return encodedMessage;
}
