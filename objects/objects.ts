type Role = {
  role: "manager" | "founder";
};
type Permissions = {
  permissions: "admin" | "user";
};

type User = Role & Permissions;

const user: User = {
  role: "founder",
  permissions: "admin",
};

// Object types with Interfaces
interface Animal {
  species: string;
  breed?: string;
  age: number;
  weight?: number;
  name: string;
}
//деклариране на обект, който съдържа интерфейс и неговите пропъртита, а обекта е от тип Animal
const animal: Animal = {
  species: "dog",
  age: 4,
  name: "Hera",
  breed: "doberman",
  weight: 25,
};

interface Cars {
  color: string;
  wheels: 4;
  transmission: "manual" | "automatic";
  fuelType: "diesel" | "gasoline";
  startEngine: () => string;
}

const car: Cars = {
  color: "white",
  wheels: 4,
  transmission: "manual",
  fuelType: "diesel",
  startEngine: function () {
    return "Start the engine";
  },
};
console.log("car", car);
console.log("car", car.startEngine());

//get object keys
const keys = Object.keys(car);
console.log("keys", keys);

// get object values
const values = Object.values(car);
console.log("values", values);

// assing two object in one
const colorObj = { color: "black" };
const backgroundObj = { backgroung: "white" };

const assingedObj = Object.assign({}, colorObj, backgroundObj);
console.log("assingedObj", assingedObj);

export {};
