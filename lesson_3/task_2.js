const RANGE = 10;

let n = 0;

do {
  if (n === 0) {
    console.log(`${n} – это ноль`);
  } else if (n % 2 === 0) {
    console.log(`${n} – четное число`);
  } else {
    console.log(`${n} – нечетное число`);
  }

  n++;
} while (n <= RANGE);
