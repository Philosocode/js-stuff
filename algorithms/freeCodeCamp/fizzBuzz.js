function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}


function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    console.log((i % 5 === 0 && i % 3 === 0)
      ? "fizzbuzz"
      : (i % 3 === 0)
      ? "fizz"
      : (i % 5 === 0)
      ? "buzz"
      : i
    );
  }
}

