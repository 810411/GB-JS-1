function getRandNum() {
  return Math.round(Math.random() * (9 - (-9)) + (-9));
}

var a = getRandNum(); b = getRandNum();

console.log(`a = ${a}, b = ${b}`);

if (a >= 0 && b >= 0) {
  console.log('a - b =', a - b);
} else if (a < 0 && b < 0) {
  console.log('a * b =', a * b);
} else {
  console.log('a + b =', a + b);
}
