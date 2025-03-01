//1. Create an array of strings and add a new element at the end of the array. Log the result.
let stringArray: string[] = ["Gosho", "Pesho", "Tosho"];
stringArray.push("Ekaterina");
console.log("stringArray", stringArray);

//2.Create an array of numbers and remove the first element from the array. Log the result.
let numbersArray: number[] = [2, 5, 6, 8];
numbersArray.shift();
console.log("numbersArray", numbersArray);

//3.Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.
let numberArray2: number[] = [1, 2, 3, 4, 5];
let devidedNumbers: number[] = numberArray2.map((num) => num / 2);
//numberArray2.map((x) => x / 2); Това не работи и не разбирам защо?
console.log("devidedNumbers", devidedNumbers);

//4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.
let arraysNum: number[] = [3, 7, 1, 9, 12, 4];
// filterArraysNum.filter(elements => elements > 5) това също не работи така и пак не разбирам защо
let filterArraysNum: number[] = arraysNum.filter((elements) => elements > 5);
console.log("filterArraysNum", filterArraysNum);

//5.Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
let arraysNum5: number[] = [9, 3, 7, 2, 8, 5];
let sortNumbers: number[] = arraysNum5.sort();
console.log("sortNumbers", sortNumbers);

// 6.Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
let stringArray6: string[] = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
];
let sliceArray: string[] = stringArray6.slice(0, 3);
console.log("sliceArray", sliceArray);

//7.Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
let stringArray7: string[] = ["car", "bike", "bus", "train", "boat"];
let spliceArray: string[] = stringArray7.splice(1, 2);
console.log("spliceArray", spliceArray);
console.log("stringArray7", stringArray7);

//8.Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.
function findLarges(number1: number, number2: number, number3: number): number {
  if (number1 >= number2 && number1 >= number3) {
    return number1;
  } else if (number2 >= number1 && number2 >= number3) {
    return number2;
  } else {
    return number3;
  }
}
let largestNumber = findLarges(12, 42, 1);
console.log(`The largest number is: ${largestNumber}`);

//9.Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number = 5): number {
  return inches * 2.54;
}
console.log(`defaule value ${convertToCentimeters()}`);
console.log(`passed value ${convertToCentimeters(10)}`);
