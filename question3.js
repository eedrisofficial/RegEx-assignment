const validNumber = (input) => {
  const regexPattern = /^[-+]?(\d+\.\d*|\.\d+|\d+)([eE][-+]?\d+)?$/;

  let message = "";
  const outPut = regexPattern.test(input);
  if (outPut) {
    message = `${input} Is a Valid input`;
  } else {
    message = `${input} Is an invalid input`;
  }
  return message;
};

// Test cases
console.log(validNumber("-9")); // true
console.log(validNumber("+31.14")); // true
console.log(validNumber("0.18")); // true
console.log(validNumber("9.")); // true
console.log(validNumber("3e-3")); // true
console.log(validNumber("1E10")); // true
console.log(validNumber(".5")); // true
console.log(validNumber(".")); // false (lone dot)
console.log(validNumber("abc")); // false (not a valid number)
quotingStyle(newString);
