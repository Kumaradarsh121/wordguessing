const wordEl = document.getElementById("word");
const letterEl = document.getElementById("letter");
const submitEl = document.getElementById("submit");
const hintEl = document.getElementById("hint");
const resultEl = document.getElementById("result");
const triesEl = document.getElementById("tries");

let word = "javascript";
let wordArray = word.split("");
let hiddenWord = [];
let tries = 5;

for (let i = 0; i < wordArray.length; i++) {
  hiddenWord.push("_");
}

wordEl.innerHTML = hiddenWord.join(" ");
triesEl.innerHTML = `Tries left: ${tries}`;

submitEl.addEventListener("click", function ()) {
  let letter = letterEl.value;
  if (wordArray.includes(letter)) {
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === letter) {
        hiddenWord[i] = letter;
      }
    }
  
    wordEl.innerHTML = hiddenWord.join(" ");
    letterEl.value = "";
  }