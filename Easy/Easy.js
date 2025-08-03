//Easy
function exerciseToday(exercise) {
  const workout = exercise;

  function gymProgram() {
    return `Today's exercise: ${workout}`;
  }

  return gymProgram();
}

console.log(`Easy Challenge:`);
// Output: Today's exercise: Running
console.log(exerciseToday("Running"));
// Output: Today's exercise: Swimming
console.log(exerciseToday("Swimming"));
// Output: Today's exercise: Dancing
console.log(exerciseToday("Dancing"));
// Output: Today's exercise: Fencing
console.log(exerciseToday("Fencing"));
console.log(`\n`);
