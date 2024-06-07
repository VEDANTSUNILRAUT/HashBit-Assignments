function sumOfDigits(num) {
  function digitSum(n) {
    return n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }

  while (num >= 10) {
    num = digitSum(num);
  }

  return num;
}

const result = sumOfDigits(456);
console.log(result);
// Output: 6
