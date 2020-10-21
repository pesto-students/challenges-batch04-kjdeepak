function duplicateLetters(...args) {
  const resultObject = {};

  const charArray = args[0].split('');

  charArray.forEach((character) => {
    if (Object.keys(resultObject).includes(character)) {
      resultObject[character] += 1;
    } else {
      resultObject[character] = 1;
    }
  });

  const finalHighestCount = Math.max(...Object.values(resultObject));
  return finalHighestCount > 1 ? finalHighestCount : false;
}

export {
  duplicateLetters,
};
