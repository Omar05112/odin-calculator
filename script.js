let firstNumber = "0";
let mathOperator = "";
let secondNumber = "";

let number = document.querySelectorAll(".number");
let display = document.getElementById("result");
let clear = document.getElementById("clear");
let operator = document.querySelectorAll(".operator");
let equal = document.getElementById("equal");

function newNumber() {
  number.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (!mathOperator) {
        if (firstNumber == "0") {
          firstNumber = button.textContent;
        } else firstNumber += button.textContent;
      } else {
        secondNumber += button.textContent;
      }
      displayStructure();
    });
  });
}

function currentOperator() {
  operator.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (secondNumber) {
        firstNumber =
          Math.round(
            Number(operate(mathOperator, firstNumber, secondNumber) * 100000)
          ) / 100000;
      }
      secondNumber = "";
      mathOperator = button.textContent;
      displayStructure();
    });
  });
}

function clearDisplay() {
  clear.addEventListener("click", (e) => {
    display.innerHTML = "0";
    displayStructure();
  });
}

function displayStructure() {
  display.textContent = `${firstNumber}${mathOperator}${secondNumber}`;
  console.log(
    `firstNumber: ${firstNumber}, mathOperator; ${mathOperator}, secondNumber: ${secondNumber}`
  );
}

function equalFunctionality() {
  equal.addEventListener("click", function (e) {
    if (mathOperator && !secondNumber) {
      display.textContent = "Please reset";
      return;
    }
    firstNumber =
      Math.round(
        Number(operate(mathOperator, firstNumber, secondNumber) * 100000)
      ) / 100000;
    secondNumber = "";
    mathOperator = "";
    displayStructure();
  });
}

function operate(operator, firstNumber, secondNumber) {
  let result = 0;
  function add(firstNumber, secondNumber) {
    result = Number(firstNumber) + Number(secondNumber);
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
      if (Number(secondNumber) === 0) {
        display.textContent = "Can't divide by 0";
        return;
      }
      divide(firstNumber, secondNumber);
      break;
  }
  return result;
}

console.log(operate("-", 3, 20));

newNumber();
currentOperator();
clearDisplay();
displayStructure();
equalFunctionality();
