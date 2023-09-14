const quotingStyle = (sentence) => {
  const singleToDoubleQuotePattern = /'([^']+)'/g;
  const singleToDoubleQuoteReplacement = '"$1"';

  // declare double to single
  const doubleToSingleQuotePattern = /(\w)"(\w)/g;
  const doubleToSingleQuoteReplacement = "$1'$2";

  // convert single quote to double quotes
  let updatedStory = sentence.replace(
    singleToDoubleQuotePattern,
    singleToDoubleQuoteReplacement
  );

  // convert double contracted words  to single quote
  updatedStory = updatedStory.replace(
    doubleToSingleQuotePattern,
    doubleToSingleQuoteReplacement
  );

  console.log(updatedStory);
};

const story = `He said, 'he can't believe it!' She , 'You're right.'`;
// quotingStyle(story);
