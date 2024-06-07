let string = "INDIA";

let charArray = string.split("");

let index = 2;

charArray.splice(index, 0, "NES");

let newString = charArray.join("");

console.log(newString);
// Output: 'INDONESIA'
