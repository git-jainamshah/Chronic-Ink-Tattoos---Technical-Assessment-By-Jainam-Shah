function getFibonacciUntil(n) {
  if (n == 0) {
    return n;
  } else if (n == 1 || n == 2) {
    return 1;
  } else {
    return getFibonacciUntil(n - 1) + getFibonacciUntil(n - 2);
  }
}
