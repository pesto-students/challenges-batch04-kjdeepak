function abbreviateString(str) {
  if (typeof (str) !== 'string') {
    throw new Error(`Invalid input type. Expected String but received ${typeof (str)}`);
  }

  let result = '';
  const splittedWordList = str.split(' ');
  const lastWord = splittedWordList[splittedWordList.length - 1][0].toUpperCase();
  result += `${splittedWordList[0]} ${lastWord}.`;
  return result;
}

export { abbreviateString };
