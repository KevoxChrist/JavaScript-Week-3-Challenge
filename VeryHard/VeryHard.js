class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  exercise() {
    console.log("Biking is phenomenal!");
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }

  completeTask() {
    return (this.busy = false);
  }

  acceptNewTask() {
    return (this.busy = true);
  }

  offerNewTask() {
    switch (this.busy) {
      case true:
        console.log(`${this.name} can't accept any new tasks right now.`);
        break;
      case false:
        console.log(`${this.name} would love to take on a new responsibility`);
        break;
    }
  }

  learnLanguage(language) {
    this.languages.push(language);
  }

  listLanguages() {
    const languages = this.languages;
    let langCount = 0;

    for (let lang of languages) {
      langCount++;
      console.log(`Language ${langCount}: ${lang}`);
    }
  }
}

console.log("Very Hard Challenge:");
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
