function largestPalindromeProduct(n) {
  let max = +[...Array(n)].reduce((a, c) => (a += 9), "");
  let min = (max + 1) / 10;
  let largest = -1;
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      let num = i * j;
      let numReverse = [...String(num)].reverse().join("");
      if (num == numReverse) {
        largest = Math.max(num, largest);
        break;
      }
    }
  }
  return largest;
}