//Medium

function sharePizza(slices, people) {
  const slice = slices;
  const person = people;
  const total = slice / person;

  return `Each person gets ${total} slices of pizza; from our ${slice} slice pizza`;
}

console.log(`Medium Challenge:`);

// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8, 2));
// Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8, 3));
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
console.log(sharePizza(21, 20));
// Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
console.log(sharePizza(10, 3));
console.log(`\n`);
