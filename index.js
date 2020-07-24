/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
constructor (name, age){
  this.name = name,
this.age = age,
 this.stomach = [];
}
eat(edible){
  if (this.stomach.length < 10) {
       this.stomach.push(edible);
       }
};
toString(){
return `${this.name}, ${this.age}`;
}
poop() {
     this.stomach = [];
  };
}
const personOne = new Person("Mary", 50);

console.log(personOne.toString());

personOne.eat("Tacos");
personOne.eat("Pasta");
personOne.eat("Spanich Manicotti");

console.log(personOne.stomach);

personOne.poop();

console.log(personOne.stomach);


/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
class Car {
  constructor(model, milesPerGallon) {
    (this.model = model),
      (this.milesPerGallon = milesPerGallon),
      (this.tank = 0),
      (this.odometer = 0);
  }
  fill(gallons) {
    this.tank += gallons;
  }
  drive(distance) {
    let maxMiles = this.tank * this.milesPerGallon;
    if (maxMiles >= distance) {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
    } else {
      this.odometer += maxMiles;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
}

let carOne = new Car("BMW", 10);

console.log(carOne);


/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
    */
class Lambdasian{
  constructor(attributes){
this.name = attributes.name,
this.age = attributes.age,
this.location = attributes.location;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}
const studentOne = new Lambdasian({
  name : "Sara",
  age : 26,
  location : "USA",
});
console.log(studentOne);
console.log(studentOne.speak());


/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:*/
class Instructor extends Lambdasian{
  constructor(attributes){
  super(attributes);
  this.specialty = attributes.specialty;
  this.favLanguage = attributes.favLanguage;
  this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject){
  return `Today we are learning about ${subject}`
  }
  grade(student, subject){
  return `${teacher.name} receives a perfect score on ${subject}`
  }
  }
  const teacher = new Instructor({
    name : "Diana",
    age : 30,
    location : "USA",
    specialty : "Redux",
    favLanguage : "JavaScript, Python, Elm etc.",
    catchPhrase : "Don't forget the homies",
  });
  
  console.log(teacher.name);
  console.log(teacher.age);
  console.log(teacher.location);
  console.log(teacher.specialty);
  console.log(teacher.favLanguage);
  console.log(teacher.catchPhrase);
  console.log(teacher.demo("Coding"));
  console.log(teacher.grade(teacher, "Coding"));


/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
})
*/
class Student extends Instructor{
  constructor(attributes){
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listSubjects(){
    return `Students favourite subjects are: ${this.favSubjects}`
  }
  sprintChallenge(subject){
return `${this.name} has began sprint challenge on ${subject}`
  }
}
const pupil = new Student({
name : "Vee",
age : 24,
location : "NC",
specialty : "React",
favLanguage :"JavaScript, HTML, CSS",
catchPhrase : "Try and Try until you sucessed.",
previousBackground : "What the student used to do before Lambda School",
className : "CS132",
favSubjects : ["HTML", "CSS", "JS"],

});

console.log(pupil.name);
  console.log(pupil.age);
  console.log(pupil.location);
  console.log(pupil.specialty);
  console.log(pupil.favLanguage);
  console.log(pupil.catchPhrase);
  console.log(pupil.demo("Accounting"));
  console.log(pupil.previousBackground);
  console.log(pupil.className);
  console.log(pupil.listSubjects());
  console.log(pupil.sprintChallenge("Accounts"));

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Student{
constructor(attributes){
  super(attributes);
  this.gradClassName = attributes.gradClassName;
  this.favInstructor = attributes.favInstructor;
}
standUp(channel){
  return `${this.name} announces to ${channel}, @channel standby times!`
}
debugsCode(subject){
 `${this.name} debugs ${pupil.name}'s code on ${subject}`
}
}

const projectM = new ProjectManager({
  name : "Daniel",
age : 44,
location : "CA",
specialty : "React and Redux",
favLanguage :"JavaScript, Java, HTML, CSS",
catchPhrase : "Go get it.",
previousBackground : "What the PM used to do before Lambda Instructor",
className : "Web162",
favSubjects : ["HTML","Java", "CSS", "JS"],
gradClassName : "CS1",
favInstructor : "Sean",

});

console.log(projectM.name);
  console.log(projectM.age);
  console.log(projectM.location);
  console.log(projectM.specialty);
  console.log(projectM.favLanguage);
  console.log(pupil.catchPhrase);
  console.log(pupil.demo("Accounting"));
  console.log(pupil.previousBackground);
  console.log(pupil.className);
  console.log(pupil.listSubjects());
  console.log(pupil.sprintChallenge("Accounts"));
/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's)
    that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
