interface Book {
  title: string;
  author: string;
  yearPublished: number;
  genre: string;
}

const book: Book = {
  title: "Към себе си",
  author: "Марк Аврелий",
  yearPublished: 2022,
  genre: "философия",
};

function displayBookInfo(book: Book) {
  return `The book name is ${book.title} with author ${book.author} The book is published in ${book.yearPublished} and is with genre ${book.genre}`;
}
const displayBookInfoProp = displayBookInfo(book);
console.log(displayBookInfoProp);

interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

const employeeOne: Employee = {
  id: 1,
  name: "Gosho",
  position: "manager",
  salary: 10000,
};
const employeeTwo: Employee = {
  id: 2,
  name: "Pesho",
  position: "Progmammer",
  salary: 7000,
};

const employeeThree: Employee = {
  id: 3,
  name: "Tosho",
  position: "QA",
  salary: 5000,
};

let employeeArray: Employee[] = [employeeOne, employeeTwo, employeeThree];

function getHighSalaryEmployees(employees: Employee[]) {
  return employees.filter((employee) => employee.salary > 6000);
}
const highSalaryEmployees = getHighSalaryEmployees(employeeArray);
console.log(highSalaryEmployees);

//Exercise Six
// Step One:
// Декларирай интерфейс Product с полета:

// id: number
// name: string
// price: number
// inStock: boolean
// Step Two:
// Създай масив products от обекти тип Product.

// Step Three:
// Създай функция filterAvailableProducts, която приема масива products и връща само тези, които са налични (inStock: true).
