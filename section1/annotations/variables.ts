let apples: number = 5;
apples = 10;

let speed: string = 'fast';

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green'];
let numbers: number[] = [1, 2, 3];

class Car {}
let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coord: { x: number; y: number } = JSON.parse(json);
console.log(coord); //{x: 10, y: 20}

let words = ['red', 'green', 'blue'];
let foundWord: boolean;
//let foundWord = false is better tho...
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
