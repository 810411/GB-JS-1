function getRandNum(minimax) {
  return Math.round(Math.random() * (minimax - (-minimax)) + (-minimax));
}

var a = getRandNum(9); b = getRandNum(9);

console.log(`a = ${a}, b = ${b}`);

if (a >= 0 && b >= 0) {
  console.log('a - b =', a - b);
} else if (a < 0 && b < 0) {
  console.log('a * b =', a * b);
} else {
  console.log('a + b =', a + b);
}
