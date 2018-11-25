function power(val, pow) {
  return val *= (pow > 1) ? power(val, pow -= 1) : 1;
}

console.log(power(2, 10)); // 1024
console.log(power(5, 2)); // 25
console.log(power(10, 10)); // 10000000000