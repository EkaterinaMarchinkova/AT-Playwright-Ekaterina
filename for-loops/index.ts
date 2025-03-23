// for... of loop - можем да достъпваме само велютата на масива, не можем да достъпваме индексите му

let fruitss: string[] = ["Apple", "Banana", "Peach", "Watermelon"];

for (let fruit of fruitss) {
  //console.log(`Fruit is ${fruit}`);
}

//for...of over array of numbers

let numbers: number[] = [10, 20, 30, 40];

for (let number of numbers) {
  if (number > 20) {
    // console.log(`Number is ${number}`);
  } else {
    //console.log(`Number ${number} plus 5 is ${number + 5}`);
  }
}

//for...of over string
let message: string = "Hello world!";
// let welcomeMessage: string = "Welcome test Pesho! How test are you test?";
// let modifiedMessage = welcomeMessage.replace("test", "");
// console.log(modifiedMessage);

for (let letter of message) {
  if (letter === "o") {
    //console.log(letter.replace("o", "@"));
  } else {
    //console.log(letter);
  }
}

// for...in over object
interface Student {
  name: string;
  lastName: string;
  age: number;
}
const student: Student = { name: "Pesho", lastName: "Petrov", age: 20 };
// accessing object value by passing object key as keyof Student
for (let key in student) {
  //console.log(`${key} = ${student[key as keyof Student]}`);
}

//for..in over array
let numsArr: number[] = [35, 25, 45, 50];

for (let index in numsArr) {
  //accessing array value by passing array index
  //console.log(`${index} = ${numsArr[index]}`);
}

//for loop
for (let i = 0; i <= 5; i++) {
  //console.log(`Index ${i}`);
}

//for loop over array
let numbersArr: number[] = [35, 25, 45, 50, 35, 25, 45, 50, 45, 50];

for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] <= 25) {
    console.log(numbersArr[i]);
  } else {
    console.log(numbersArr[i] / 2);
  }
}

//for loop incrementation
for (let i = 0; i <= 9; i++) {
  //console.log(i);
}

//for loop - прескачаме индексите и принтираме през едно
for (let i = 30; i <= 60; i += 2) {
  //console.log(i);
}

//decrementation
for (let i = 30; i >= 0; i--) {
  //console.log(i);
}

export {};
