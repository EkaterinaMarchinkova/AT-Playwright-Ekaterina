// let vs const
//let  - променлива която може да се реасайнва, може да приема повече от една стойност
// const - не може да бъде реасайнвана, приема само първоначалната стойност
let number: number = 5;
number = 10;

const message: string = "Welcome";

// String
let welcomeMessage: string = "Hello, Peter!";
let test: string = 'Ivan';

let welcomeMessageLenght = welcomeMessage.length;
 
// String interpolation
let welcomeMessageDetails: string = `My welcome message lenght is ${welcomeMessageLenght}`
let userWelcomeMessage: string = `Welcome, ${test}`

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
let stringValue: any = 'Hello';
stringValue = 10;
stringValue = 10 ===10;
stringValue =[10, 20, 30]


console.log("stringValue:",stringValue)



