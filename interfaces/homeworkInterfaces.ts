//1. Create a TypeScript interface named Person that represents a person with the following properties:
interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

// 2. Create a TypeScript interface named PersonInfo that Extends Person type from the previous exercise and add the following properties:
interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
}

//3. Create an object of type Person using the interface from Exercise 1. Declare a variable person1 of type Person.

const person1: Person = {
  name: "Ekaterina",
  lastName: "Marchinkova",
  age: 28,
  email: "e.marchinkova@gmail.com",
  phoneNumber: +359898989898,
};

//Create an object of type PersonInfo using the interface from Exercise 2. Declare a variable person2 of type PersonInfo.

const person2: PersonInfo = {
  name: "Ekaterina",
  lastName: "Marchinkova",
  age: 28,
  email: "e.marchinkova@gmail.com",
  phoneNumber: +359898989898,
  country: "Bulgaria",
  greeting: function () {
    return `Welcome ${this.name}. You are from ${this.country} and you are ${this.age} years old.`;
  },
};

console.log(person2);
console.log(person2.greeting());
