const display = document.getElementById('display');
let expression = '';

function addDigit(digit) {
  expression += digit;
  display.value = expression;
}

function addDecimal() {
  if (!expression.includes('.')) {
    expression += '.';
    display.value = expression;
  }
}

function addOperator(operator) {
  if (expression.endsWith('+') || expression.endsWith('-') || expression.endsWith('*') || expression.endsWith('/')) {
    expression = expression.slice(0, -1) + operator;
    display.value = expression;
  } else {
    expression += operator;
    display.value = expression;
  }
}

function clearDisplay() {
  expression = '';
  display.value = expression;
}

function deleteLast() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    display.value = expression;
  } catch (error) {
    alert('Invalid Expression');
    clearDisplay();
  }
}
