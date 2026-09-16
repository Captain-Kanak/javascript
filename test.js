function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const increment = outer();

increment();
increment();
increment();
