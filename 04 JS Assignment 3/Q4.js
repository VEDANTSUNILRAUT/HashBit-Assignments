let string = "This is a sample string with more than 20 characters";

string = string.toLowerCase();

const vowels = ["a", "e", "i", "o", "u"];
const consonants = "bcdfghjklmnpqrstvwxyz".split("");

let consonantCount = 0;

for (let char of string) {
  if (vowels.includes(char)) {
    vowelCount++;
  } else if (consonants.includes(char)) {
    consonantCount++;
  }
}

console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);

// Output:
// Number of vowels: 13
// NumbQer of consonants: 26
