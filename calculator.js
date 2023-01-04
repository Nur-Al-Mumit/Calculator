const allBtns = document.querySelector(".clac-btn-container");
const display = document.querySelector(".display");
let preOperator = null;
let pressedKey = "0";
let subTotal = 0;

allBtns.addEventListener("click", function (event) {
  const btnInput = event.target.innerText;
  if (isNaN(parseInt(btnInput))) {
    forSymbol(btnInput);
  } else {
    forNumber(btnInput);
  }
  printResult();
});
// For Handle Symbol
function forSymbol(symbol) {
  switch (symbol) {
    case "C":
      pressedKey = "0";
      subTotal = 0;
      break;
    case "←":
      if (pressedKey.length === 1) {
        pressedKey = "0";
      } else {
        pressedKey = pressedKey.substring(0, pressedKey.length - 1);
      }
      break;
    case "÷":
    case "×":
    case "-":
    case "+":
      mathOperators(symbol);
      break;
    case "=":
      if (preOperator === null) {
        return;
      }
      doSum(parseInt(pressedKey)); //.slice(1)
      preOperator = null;
      pressedKey = subTotal;
      subTotal = 0;
      break;
  }
}
// For Handle Number
function forNumber(number) {
  if (pressedKey === "0") {
    pressedKey = number;
  } else {
    pressedKey += number;
  }
}

// For Math Operatior
function mathOperators(oparators) {
  switch (pressedKey) {
    case "0":
    case "÷":
    case "×":
    case "-":
    case "+":
      return;
  }

  if (subTotal === 0) {
    subTotal = parseInt(pressedKey);
    console.log("sub total first", subTotal);
  } else {
    doSum(parseInt(pressedKey));
  }

  preOperator = oparators;
  pressedKey = "0";
}

function doSum(newNumber) {
  switch (preOperator) {
    case "÷":
      subTotal /= newNumber;
      break;
    case "×":
      subTotal *= newNumber;
      break;
    case "-":
      subTotal -= newNumber;
      break;
    case "+":
      subTotal += newNumber;
      break;
  }
  pressedKey = subTotal;
}
// For print the math operation result
function printResult() {
  display.innerText = pressedKey;
}
