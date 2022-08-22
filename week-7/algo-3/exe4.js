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

  let word = "",
    index1 = 0;
  for (let i in str) {
    index1 = str.indexOf(str[i]);
    word[i] = letters[index1 + 1];
  }
  console.log(word);
}

encrypt("cat");
