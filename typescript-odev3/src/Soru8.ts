function sum(...numbers: number[]): number {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
