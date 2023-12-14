/*
 * File: sophisticated_code.js
 * Description: Complex JavaScript code showcasing various concepts and techniques.
 */

// Define a class for a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to calculate and return the birth year
  getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// Create instances of the Person class
const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Smith", 30);

person1.greet(); // Hello, my name is John Doe!
person2.greet(); // Hello, my name is Jane Smith!

console.log(`John Doe was born in ${person1.getBirthYear()}`); // John Doe was born in 1996
console.log(`Jane Smith was born in ${person2.getBirthYear()}`); // Jane Smith was born in 1991

// Implement a factorial function using recursion
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 120

// Generate a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10)); // Random number between 1 and 10

// Implement a binary search algorithm
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 6)); // 5

// Implement a helper function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(17)); // true
console.log(isPrime(15)); // false

// Perform asynchronous operations using Promises
function delay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

console.log("Start");
delay(2000).then(() => console.log("Delayed execution"));
console.log("End");

// Create a higher-order function to generate Fibonacci sequence
function generateFibonacciSequence(n) {
  const fibonacciSeq = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNum = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
    fibonacciSeq.push(nextNum);
  }

  return fibonacciSeq;
}

console.log(generateFibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Implement a class hierarchy
class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
  }

  getArea() {
    return this.sideLength * this.sideLength;
  }
}

const redCircle = new Circle("red", 5);
const blueSquare = new Square("blue", 4);

console.log(redCircle.getArea()); // 78.53981633974483
console.log(blueSquare.getArea()); // 16

// Use the fetch API to make an HTTP request
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// ... More code ...

// This code could continue for over 200 lines with additional complex functionality and algorithms