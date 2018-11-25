function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function mathOperation(arg1, arg2, operation) {
  switch(operation){
    case '+':
      return add(arg1, arg2);
    case '-':
      return subtract(arg1, arg2);
    case '*':
      return multiply(arg1, arg2);
    case '/':
      return divide(arg1, arg2);
    default:
      return 'Введена не верная операция';
  }
}

console.log(mathOperation(5, 5, '+'));
console.log(mathOperation(5, 5, '-'));
console.log(mathOperation(5, 5, '*'));
console.log(mathOperation(5, 5, '/'));
console.log(mathOperation(5, 5, '^'));
