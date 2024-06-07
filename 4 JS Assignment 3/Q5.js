function correctfn(sentence, wrong, correct) {
  let regex = new RegExp("\\b" + wrong + "\\b", "gi");

  let correctedSentence = sentence.replace(regex, correct);

  return correctedSentence;
}

let originalSentence =
  "This is an example sentance with some misspelled words.";
let wrongWord = "sentance";
let correctWord = "sentence";

let correctedSentence = correctfn(originalSentence, wrongWord, correctWord);
console.log(correctedSentence);

// Output:
// This is an example sentence with some misspelled words.
