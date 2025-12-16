# University Course Management System

## Description
This project is a simple University Course Management System built using JavaScript and Node.js.  
It demonstrates how student data can be fetched asynchronously, modeled using ES6 classes, and analyzed using modern array methods.

The project focuses on core JavaScript concepts rather than user interfaces or web development.

---

## Project Files
The project is organized into the following files:

- **models.js**  
  Defines the `Student` class.  
  The student ID is made immutable using `Object.defineProperty()`.  
  Includes methods to add courses and calculate the student’s average grade.

- **database.js**  
  Simulates a slow database using `setTimeout`.  
  Fetches student data asynchronously using a callback function.

- **analytics.js**  
  Contains all analytical logic.  
  Calculates class averages, finds the top student using `reduce`, and filters students using higher-order functions.

- **main.js**  
  The entry point of the program.  
  Fetches data, creates `Student` objects, tests ID immutability, and prints the analytics report.

---

## How to Run
1. Make sure Node.js (LTS version) is installed.
2. Ensure the project includes this `package.json` file:
   ```json
   {
     "type": "module"
   }
