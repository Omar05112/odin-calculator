let firstNumber = 0;
let operator = "";
let secondNumber = 0;

function operate(operator, firstNumber, secondNumber) {
  let result = 0;
  function add(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
  }
  function substract(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
  }
  function multiply(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
  }
  function divide(firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
  }
  switch (operator) {
    case "-":
      substract(firstNumber, secondNumber);
      break;
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
  }
  return result;
}
//   if (operator == "-") {
//     substract(firstNumber, secondNumber);
//     return result;
//   } else if (operator == "+") {
//     add(firstNumber, secondNumber);
//     return result;
//   } else if (operator == "*") {
//     multiply(firstNumber, secondNumber);
//     return result;
//   } else if (operator == "/") {
//     divide(firstNumber, secondNumber);
//     return result;
//   }

console.log(operate("*", 9, 14));
