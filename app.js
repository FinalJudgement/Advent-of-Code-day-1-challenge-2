import str from "./data.js";
// const str = `1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet`;

const numStr = "123456789";

const strArr = str.split("\n");

const strArrResult = strArr.map((str) => {
  const splitTheString = str.split("");
  // splitTheString.at(-1);
  let firstNum;
  let secondNum;

  for (let char of splitTheString) {
    if (numStr.includes(char)) {
      if (!firstNum) {
        firstNum = char;
      }
      secondNum = char;
    }
  }
  return Number(firstNum + secondNum);
});

const result = strArrResult.reduce((a, b) => a + b);

console.log(result);
