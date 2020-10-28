const sumEvenArgs = (...args) => args.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  }
  return accumulator + 0;
}, 0);

export { sumEvenArgs };
