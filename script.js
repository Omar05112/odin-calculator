let firstNumber = 0;

let secondNumber = 0;

let number = document.getElementsByClassName("number");

let userInput = document.getElementById("result");
let clear = document.getElementById("clear");
let operator = document.getElementsByClassName("operator");
userInput.style.color = "white";
userInput.style.fontSize = "16px";
userInput.style.textAlign = "right";
userInput.style.fontFamily = "Arial";
userInput.textContent = "0";
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    userInput.style.color = "white";
    userInput.style.fontSize = "16px";
    userInput.style.textAlign = "right";
    userInput.style.fontFamily = "Arial";
    if (userInput.textContent == "0") {
      userInput.textContent = number[i].textContent;
      firstNumber = userInput.textContent;
    } else if (userInput.textContent.length >= 1) {
      userInput.textContent = userInput.textContent.concat(
        number[i].textContent
      );
      firstNumber = userInput.textContent;
    } else {
      userInput.textContent = number[i].textContent;
      firstNumber = userInput.textContent;
    }
    console.log(
      `traversed through the function, i is ${i}, character length is ${userInput.textContent.length}, firstNumber inside the eventlistener is ${firstNumber}`
    );
  });
}


// console.log(`juh`);
// console.log(`firstNumber right now is ${firstNumber}`);


for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    userInput.style.color = "white";
    userInput.style.fontSize = "16px";
    userInput.style.textAlign = "right";
    userInput.style.fontFamily = "Arial";

    

  });
}

clear.addEventListener("click", (e) => {
  userInput.innerHTML = "0";
});

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

console.log(operate("*", 9, 14));
