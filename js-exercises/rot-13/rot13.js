function rot13(...args) {
  const encodedString = args[0];
  let decodedString = '';
  const shifterValue = 13;
  const lowerboundAsciiValue = 65;
  let characterAsciiCode;
  for (const character of encodedString) {
    if (character.match(/[A-Z]/)) {
      characterAsciiCode = character.charCodeAt();
      if (characterAsciiCode >= lowerboundAsciiValue + shifterValue) {
        decodedString += String.fromCharCode(characterAsciiCode - shifterValue);
      } else {
        decodedString += String.fromCharCode(characterAsciiCode + shifterValue);
      }
    } else {
      decodedString += character;
    }
  }
  return decodedString;
}

export {
  rot13,
};
