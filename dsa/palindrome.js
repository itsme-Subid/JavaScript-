function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let reversed = 0, original = x;
  while (x) {
    reversed = (reversed * 10) + (x % 10);
    x = Math.floor(x / 10);
  }
  return reversed === original;
};