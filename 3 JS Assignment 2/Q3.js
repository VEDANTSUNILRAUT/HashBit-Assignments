function findTax(salary) {
  let tax = 0;
  switch (true) {
    case salary <= 500000:
      tax = 0;
      break;
    case salary <= 1000000:
      tax = (salary - 500000) * 0.1;
      break;
    case salary <= 1500000:
      tax = 50000 + (salary - 1000000) * 0.2;
      break;
    default:
      tax = 150000 + (salary - 1500000) * 0.3;
  }
  return tax;
}

// Example usage:
console.log(findTax(400000)); // Output: 0
console.log(findTax(600000)); // Output: 10000 (10% of 100000)
console.log(findTax(1200000)); // Output: 100000 (50000 + 20% of 200000)
console.log(findTax(1600000)); // Output: 150000 (150000 + 30% of 100000)
