// let vs const
//let  - променлива която може да се реасайнва, може да приема повече от една стойност
// const - не може да бъде реасайнвана, приема само първоначалната стойност
let number: number = 5;
number = 10;

const message: string = "Welcome";

// String
let welcomeMessage: string = "Hello, Peter!";
let test: string = "Ivan";

let welcomeMessageLenght = welcomeMessage.length;

// String interpolation
let welcomeMessageDetails: string = `My welcome message lenght is ${welcomeMessageLenght}`;
let userWelcomeMessage: string = `Welcome, ${test}`;

// Number
let firstNumber: number = 5;
let secondNumber: number = 10;

// Number math operations
let add: number = secondNumber + firstNumber;
let substract: number = secondNumber - firstNumber;
let multiply: number = secondNumber * firstNumber;
let devide: number = secondNumber / firstNumber;

// Boolean
let isTrue: boolean = true;
let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumbersEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
let isAnyNumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;

// Any - лоша практика, използва се в крайни случаи, когато някъде не сме задали променливите правилно
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

// Arrays and functions
//Тернарни оператори
const isPositiveNum: string =
  5 > 0 ? "The number is positive" : "The number is negative";

const age: number = 50;
const myName: string = "Pesho";

const personDescription =
  age < 40
    ? `${myName} is younger than 40. He is ${age} years old.`
    : `${myName} is older than 40. He is ${age} years old.`;

const personName = `His name is "${myName}".`;

// If else statement
if (age < 40) {
  console.log(`Age are lower tnah 40`);
} else {
  console.log(`Age are greater tnah 40`);
}

const num1: number = 10;
if (num1 <= 10) {
  console.log("The number is lower than 10");
} else if (num1 > 100) {
  console.log("The number is greater than 100");
} else if (num1 > 80) {
  console.log("The number is greater than 80 and less then 100");
} else {
  console.log("The number is between 10 and 100");
}

type PersonInfoType = string | number;

const personNameInf: PersonInfoType = "Ivan";
const personAgeInfo: PersonInfoType = 25;

type Status = "approved" | "rejected" | "pending" | "fullfiled";

const currentStatus: Status = "fullfiled";

type PersonData = {
  name: string;
  lastName: string;
  age: number;
  city?: string;
};


