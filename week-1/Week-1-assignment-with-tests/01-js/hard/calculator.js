/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

// class Calculator {
//   constructor(){
//     this.result=0;
//   }
//   add(a){
//     this.result+=a;
//   }
//   subtract(a){
//     this.result-=a;
//   }
//   multiply(a){
//     this.result*=a;
//   }
//   divide(a){
//     try{
//       this.result/=a;
//     }
//     catch(err){
//       throw new Error('Error');
//     }
//   }
//   clear(){
//     this.result=0;
//   }
//   getResult(){
//     return this.result;
//   }
//   calculate(exp){
//     console.log(exp);
//     //remove spaces
//     exp=exp.replace(/\s/g,'');
//     console.log(exp);
//     //if expression have non numericals throw error
//     // exp.split('').map(char=>{if(isNaN(parseInt(char))){throw new Error('non numeric characters in expression.');}});
//     for(let char of exp.split('')){
//       if(isNaN(parseInt(char))){
//         throw new Error('Error');
//       }
//     }
//     //calc expression;
//     this.result=eval(exp);
//   }
  

// }
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if(number===0){
      throw new Error('zero division error');
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove multiple continuous spaces from the expression
    const cleanedExpression = expression.replace(/\s+/g, ' ');

    // Check for invalid non-numerical characters
    if (!/^[\d\s+\-*/().]+$/.test(cleanedExpression)) {
      throw new Error('Invalid expression: contains non-numerical characters');
    }

    // Evaluate the cleaned expression using eval()
    let temp=eval(cleanedExpression);
    if(temp===Infinity){
      throw new Error('error');
    }
    this.result=temp;
  }
}


module.exports = Calculator;
