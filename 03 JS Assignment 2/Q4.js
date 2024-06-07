function sumOfProductOfDigits(n1, n2) {
  const digits1 = Array.from(String(n1), Number);
  const digits2 = Array.from(String(n2), Number);

  const maxLength = Math.max(digits1.length, digits2.length);

  let sum = 0;
  for (let i = 0; i < maxLength; i++) {
    const digit1 = digits1[digits1.length - 1 - i] || 0;
    const digit2 = digits2[digits2.length - 1 - i] || 0;

    sum += digit1 * digit2;
  }

  return sum;
}

// Output:
console.log(sumOfProductOfDigits(6, 34)); // Output: 24
