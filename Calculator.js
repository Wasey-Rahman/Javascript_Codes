// Task-5
function javascriptCalculator(Number1, Number2, Operator) {
    switch (Operator) {
      case '+':
        return Number1 + Number2;
        case '*':
        return Number1 * Number2;
        case '/':
        if (Number2 !== 0) {
          return Number1 / Number2;
        } else {
          return "Error: Cannot divide by zero";
        }
      default:
        return "Error: Invalid operator";
        case '-':
        return Number1 - Number2;
    }
      
      
      
  }
  
  // Testing the javascript calculator for final result
  const Number1 = 35;
  const Number2 = 7;
  const Operation = '/';
  const finalResult = javascriptCalculator(Number1, Number2, Operation);
  console.log(finalResult); 
  // finalResult: 5
  