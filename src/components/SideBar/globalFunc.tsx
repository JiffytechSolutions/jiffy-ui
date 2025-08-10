const checkIndex = (str: string, searchStr: string, ind: number) => {
  let i = 0;
  for (i; i < searchStr.length; i++) {
    if (!str[ind + i] || str[ind + i] !== searchStr[i]) return false;
  }
  if (str[i + ind] && str[i + ind] !== "/") return false;
  return true;
};

export const searchWordInString = (str: string, searchStr: string): boolean => {
  if (str.length < searchStr.length) return false;
  for (let i = 0; i <= str.length - searchStr.length; i++) {
    if (str[i] === searchStr[0]) {
      if (checkIndex(str, searchStr, i)) return true;
    }
  }
  return false;
};
