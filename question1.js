const regexpGolf = (testStrings, regexes) => {
  console.log(regexes[0]);

  // Test each regular expression against test strings
  for (let i = 0; i < regexes.length; i++) {
    const regex = regexes[i];
    console.log(`Testing regex ${i + 1}: ${regex}`);

    //   perform operation on each test string to find their match
    for (const testString of testStrings) {
      const match = regex.test(testString);
      console.log(`  "${testString}" => ${match}`);
    }
  }
};

const testStrings = [
  "I have a car and a cat.",
  "The pop music is playing.",
  "The ferry is crossing the river.",
  "The delicious cake is marvelous.",
  "This is a test, to check for whitespace.",
  "The elephant is a large animal.",
  "Example of a word without the letter E.",
];
// Define regular expressions for each case

const regexes = [
  /ca[rt]/, // Matches 'cat' or 'car'
  /pr?op/, // Matches 'prop' or 'pop'
  /ferr(et|y|ari)/, // Matches 'ferret', 'ferry', or 'ferrari'
  /\b\w+ious\b/, // Matches words ending with 'ious'
  /\s[.,;:]/, // Matches whitespace followed by a punctuation character
  /\b\w{7,}\b/, // Matches words with 7 or more letters
  /\b[^eE\s]+\b/, // Matches words that do not contain the letter 'e' or 'E'
];

regexpGolf(testStrings, regexes);
