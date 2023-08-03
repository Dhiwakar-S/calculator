document.addEventListener('DOMContentLoaded', () => {
  let displayValue = "0";
  let currentOperator = null;
  let prevValue = 0;

  const display = document.getElementById('result');

  const updateDisplay = () => {
    display.textContent = displayValue;
  };

  
  const handleNumberClick = (number) => {
    if (displayValue === "0" || currentOperator === "=") {
      displayValue = number;
    } else {
      displayValue += number;
    }
    updateDisplay();
  };


  const handleOperatorClick = (operator) => {
    if (currentOperator !== null) {
      calculate();
    }
    currentOperator = operator;
    prevValue = parseFloat(displayValue);
    displayValue = "0";
  };

  
  const calculate = () => {
    const currentValue = parseFloat(displayValue);
    switch (currentOperator) {
      case "+":
        displayValue = (prevValue + currentValue).toString();
        break;
      case "-":
        displayValue = (prevValue - currentValue).toString();
        break;
      case "*":
        displayValue = (prevValue * currentValue).toString();
        break;
      case "/":
        displayValue = (prevValue / currentValue).toString();
        break;
    }
    currentOperator = "=";
    updateDisplay();
  };

 
  const handleClearClick = () => {
    displayValue = "0";
    currentOperator = null;
    prevValue = 0;
    updateDisplay();
  };


  const handleEqualsClick = () => {
    calculate();
  };


  const numberButtons = document.querySelectorAll('.buttons button:not(.operator)');
  numberButtons.forEach((button) => {
    button.addEventListener('click', () => handleNumberClick(button.textContent));
  });


  const operatorButtons = document.querySelectorAll('.operator');
  operatorButtons.forEach((button) => {
    button.addEventListener('click', () => handleOperatorClick(button.textContent));
  });


  document.querySelector('.clear').addEventListener('click', handleClearClick);
  document.querySelector('.equals').addEventListener('click', handleEqualsClick);
});
