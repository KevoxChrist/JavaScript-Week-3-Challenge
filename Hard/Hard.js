const createPersonalInfo = function (names, ssn) {
  const PII = {
    name: names,
    ssn: ssn,
  };

  return {
    getName: () => {
      return PII.name;
    },
    getSSN: () => {
      return PII.ssn;
    },
  };
};

const patient2 = createPersonalInfo("Johnny", "123-45-6789"); // This variable closes over createPersonalInfo variable environment
//which makes it possible to acess the data from the original birthplace/execution context of this function.

console.log(`Hard Challenge:
\nName: ${patient2.getName()}
SSN: ${patient2.getSSN()}`);

console.log("Undefined Outputs: ");
console.log(patient2.names);
console.log(patient2.ssn);
console.log(`\n`);
