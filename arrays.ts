// Arrays
let numbersArray: number[] = [5, 1, 2, 3];
let stringAndNumsArray: (number | string)[] = [1, "Pesho", "Gosho", 2];

let fruits: string[] = ["Apple", "Bannana", "Pear", "Peach", "Grape"];
let firstEl: string = fruits[1];
let secondEl: string = fruits[3];

fruits.push("Mango");
// numbersArray.pop();
fruits.shift();
numbersArray.unshift();

let multiplyNumbers = numbersArray.map((element: number) => element * 2);
let multiplySpecialNumbers = numbersArray.map((element:number) =>{
    if(element > 2){
        return element * 2;
    }else {
        return element;
    }
})

let filterNumArray = numbersArray.filter(element => element > 2)

console.log("filterNumArray",filterNumArray);





