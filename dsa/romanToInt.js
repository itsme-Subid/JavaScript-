function romanToInt(s) {
  if (!s) {
    return 0;
  }
  let meaning = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    if (meaning.get(s[i]) < meaning.get(s[i + 1])) {
      integer -= meaning.get(s[i]);
    } else {
      integer += meaning.get(s[i]);
    }
  }
  return integer;
};