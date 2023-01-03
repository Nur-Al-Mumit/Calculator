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
      doSum(parseInt(pressedKey.slice(1)));
      previousOperator = null;
      pressedKey = +subTotal;
      subTotal = 0;
      break;
  }
}
function forNumber(number) {
  if (pressedKey === "0") {
    pressedKey = number;
  } else {
    pressedKey += number;
  }
}

// For Math Operatior
function mathOperators(oparators) {
  console.log("sosfskafksf ", pressedKey);
  switch (pressedKey) {
    case "0":
    case "÷":
    case "×":
    case "-":
    case "+":
      break;
  }

  if (subTotal === 0) {
    subTotal = parseInt(pressedKey);
  } else {
    doSum(pressedKey);
  }

  preOperator = oparators;
  pressedKey = oparators;

  //   switch (oparators) {
  //     case "÷":
  //     case "×":
  //     case "-":
  //     case "+":
  //   }
}

function doSum(newNumber) {
  //   let newNumber = parseInt(number.slice(1));
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
  console.log("fjsafjsalfjakl jflas", subTotal);
  console.log("new bumer for math", newNumber);
}
// For print the math operation result
function printResult() {
  display.innerText = pressedKey;
}
