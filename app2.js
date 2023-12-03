import str from "./data.js";

const allNumbers = "123456789";

const wordToNumbersComparison = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const turnStringToLines = (data) => {
  return data.split("\n");
};

const lines = turnStringToLines(str);

const processAllLines = (list) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    const resultingNumber = processLine(list[i]);
    sum += resultingNumber;
    console.log(sum);
  }
};

const processLine = (line) => {
  const firstNumber = retrieveFirstNumber(line);
  const lastNumber = retrieveLastNumber(line);
  return Number(`${firstNumber}${lastNumber}`);
};

const retrieveFirstNumber = (singleLine) => {
  for (let i = 0; i < singleLine.length; i++) {
    let sliceForFirstNumber = singleLine.slice(i, i + 3);
    let sliceForFirstWord = singleLine.slice(i, i + 5);

    const firstNumberResult = checkForFirstNumber(sliceForFirstNumber);
    const firstWordResult = checkForFirstWord(sliceForFirstWord);
    if (firstNumberResult) {
      return firstNumberResult;
    } else if (firstWordResult) {
      return firstWordResult;
    }
  }
};

const checkForFirstWord = (itemToCheck) => {
  for (let i = 0; i < itemToCheck.length; i++) {
    for (let numberWord in wordToNumbersComparison) {
      if (itemToCheck.includes(numberWord)) {
        return wordToNumbersComparison[numberWord];
      }
    }
  }
};

const checkForFirstNumber = (itemToCheck) => {
  for (let i = 0; i < itemToCheck.length; i++) {
    if (allNumbers.includes(itemToCheck[i])) {
      // if the first three chars have a number return it
      return itemToCheck[i];
    }
  }
};

const retrieveLastNumber = (singleLine) => {
  for (let i = singleLine.length - 1; i >= 0; i--) {
    const sliceForLastNumber = singleLine.slice(i, i + 3);
    const sliceForLastWord = singleLine.slice(i, i + 5);
    const lastNumberResult = checkForLastNumber(sliceForLastNumber);
    const lastWordResult = checkForLastWord(sliceForLastWord);
    if (lastNumberResult) {
      return lastNumberResult;
    } else if (lastWordResult) {
      return lastWordResult;
    }
  }
};

const checkForLastNumber = (itemToCheck) => {
  const checkIfNumber = allNumbers.includes(itemToCheck[0]);
  if (checkIfNumber) {
    // we only need to check for the number at index 0
    return itemToCheck[0];
  }
};

const checkForLastWord = (itemToCheck) => {
  for (let i = 0; i < itemToCheck.length; i++) {
    for (let numberWord in wordToNumbersComparison) {
      if (itemToCheck.includes(numberWord)) {
        return wordToNumbersComparison[numberWord];
      }
    }
  }
};

const finalResult = processAllLines(lines);
