let firstNumber = "0";
let mathOperator = "";
let secondNumber = "";

let number = document.querySelectorAll(".number");

let display = document.getElementById("result");
let clear = document.getElementById("clear");
let operator = document.querySelectorAll(".operator");

function newNumber() {
  number.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (!mathOperator) {
        if (display.textContent == "0") {
          display.textContent = button.textContent;
        } else {
          display.textContent += button.textContent;
        }
        firstNumber = display.textContent;
      } else {
        display.textContent += button.textContent;
        secondNumber = display.textContent;
      }
      displayStructure();
    });
  });
}

function currentOperator() {
  operator.forEach((button) => {
    button.addEventListener("click", function (e) {
      mathOperator = button.textContent;
      displayStructure();
    });
  });
}

function clearDisplay() {
  clear.addEventListener("click", (e) => {
    display.innerHTML = "0";
  });
}

newNumber();
currentOperator();
clearDisplay();

function displayStructure() {
  display.textContent = `${firstNumber}${mathOperator}${secondNumber}`;
}

// function operate(operator, firstNumber, secondNumber) {
//   let result = 0;
//   function add(firstNumber, secondNumber) {
//     result = firstNumber + secondNumber;
//   }
//   function substract(firstNumber, secondNumber) {
//     result = firstNumber - secondNumber;
//   }
//   function multiply(firstNumber, secondNumber) {
//     result = firstNumber * secondNumber;
//   }
//   function divide(firstNumber, secondNumber) {
//     result = firstNumber / secondNumber;
//   }
//   switch (operator) {
//     case "-":
//       substract(firstNumber, secondNumber);
//       break;
//     case "+":
//       add(firstNumber, secondNumber);
//       break;
//     case "*":
//       multiply(firstNumber, secondNumber);
//       break;
//     case "/":
//       divide(firstNumber, secondNumber);
//       break;
//   }
//   return result;
// }

// console.log(operate("*", 9, 14));
