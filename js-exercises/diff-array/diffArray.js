function diffArray(...args) {
  const combinedInputArray = [...args[0], ...args[1]];
  const combinedInputArrayUniqueEntries = Array.from(new Set(combinedInputArray));
  return combinedInputArrayUniqueEntries.filter(element => {
    if (args[0].includes(element) && args[1].includes(element)) {
      return false;
    }
    return true;
  });
}

export {
  diffArray,
};
