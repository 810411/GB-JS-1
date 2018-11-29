const RANGE = 100;

// Очевидный вариант

var n = 2;

while (n <= RANGE) {
  let bool = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      bool = false;
    }
  }

  if (bool) {
    console.log(n)
  }

  n++;
}


// Вариант с "Решето Эратосфена"

var arr = [];
var p = 2;

for (var i = 2; i < RANGE; i++) {
  arr[i] = true;
}

do {
  for (i = 2 * p; i < RANGE; i += p) {
    arr[i] = false;
  }

  for (i = p + 1; i < RANGE; i++) {
    if (arr[i]) {
      break
    }
  }

  p = i;
} while (p * p < RANGE);

for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    console.log(i)
  }
}
