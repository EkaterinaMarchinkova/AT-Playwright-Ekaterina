// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string
interface Country {
  name: string;
  capital: string;
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface
const firstCountry: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  population: 5900000,
  language: "bulgarian",
};

const secondCountry: Country = {
  name: "Italy",
  capital: "Rome",
  population: 5900000,
  language: "italian",
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it
function displayCountryDetails(countryObj: Country) {
  return `The capital of ${countryObj.name} is ${countryObj.capital}. The official language is ${countryObj.language} and population is ${countryObj.population} people.`;
}
const detailsAboutBulgaria = displayCountryDetails(firstCountry);
const detailsAboutItaly = displayCountryDetails(secondCountry); // преизползвахме функцията като си направихме нов обект за Италия, който използва същия интерфейс като обекта за България и го преизползвахме във функцията
//console.log(detailsAboutBulgaria, "\n", detailsAboutItaly);

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number

interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"
const studentOne: Student = { id: 1, name: "Ekaterina", age: 28, grade: 6 };
const studentTwo: Student = { id: 2, name: "Pesho", age: 20, grade: 5 };
const studentThree: Student = { id: 3, name: "Gosho", age: 18, grade: 3 };

// Step Three: Declare array "students" with objects of type "Student"
let studentsArray: Student[] = [studentOne, studentTwo, studentThree];

// students.map((student) => (student.grade = 4));

// students.map((student) => {
//   if (student.name === "Pesho") {
//     student.grade = 3;
//   }
// });

// console.log("students", students);

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}

const studentsNames = getStudents(studentsArray);
//console.log(studentsNames);
//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending

//Sorted by Id asc
function sortStudentsById(students: Student[]): Student[] {
  return students.sort((a, b) => a.id - b.id);
}
const sortedStudentsById = sortStudentsById(studentsArray);
console.log(sortedStudentsById);

//Sorted by name asc
function sortStudentsByName(students: Student[]): Student[] {
  return students.sort((a, b) => a.name.localeCompare(b.name));
}
const sortedStudentsByName = sortStudentsByName(studentsArray);
console.log(sortedStudentsByName);

//Sorted by age desc
function sortStudentsByAge(students: Student[]): Student[] {
  return students.sort((b, a) => b.age - a.age);
}
const sortedStudentsByAge = sortStudentsByAge(studentsArray);
console.log(sortedStudentsByAge);
