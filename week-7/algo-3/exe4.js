function encrypt(str) {
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let word = ""
   let index1 
  for (let i in str) {
    console.log(str[i]);
    index1 = letters.indexOf(str[i]);
    word += letters[index1 + 1];
  }
  console.log(word);
}

encrypt("CAT");
