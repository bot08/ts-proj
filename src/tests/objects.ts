// const car: { type: string, mileage?: number } = {
//   type: "Toyota",
// };

interface carInterface {
  type: string,
  mileage?: number
}

const car: carInterface = {
  type: "BMW"
}

car.type = "Lanos";

car.mileage = 22000;

export default car;