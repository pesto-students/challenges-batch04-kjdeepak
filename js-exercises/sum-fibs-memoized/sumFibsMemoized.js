function sumFibs(num) {
  let numOne = 1;
  let numTwo = 1;
  let nextTerm = 2;
  let sumOfOddFibonacci = 2;

  if (num <= 2) {
    return sumOfOddFibonacci;
  }

  while (nextTerm <= num) {
    if (nextTerm % 2 !== 0) {
      sumOfOddFibonacci += nextTerm;
    }
    numOne = numTwo;
    numTwo = nextTerm;
    nextTerm = numOne + numTwo;
  }

  return sumOfOddFibonacci;
}

function cacheFunction(fn) {
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      return cache[n];
    // eslint-disable-next-line no-else-return
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

export { sumFibs, cacheFunction };
