function Reduce(array, reducer, initialValue = 0) {
  var result = "";
  if (reducer == "numericArray") {
    parseInt(array);
    reducer = (acc, curr) => (acc += curr);
    result = array.reduce(reducer, parseInt(initialValue)).toString();
  } else if (reducer == "stringArray") {
    console.log(array);
    reducer = (acc, curr) => acc.toString().concat(" " + curr.toString());
    result = array.reduce(reducer, parseInt(initialValue)).toString();
    result = result.substr(2, result.length).trim();
  }

  return result;
}
