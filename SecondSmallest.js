// Task-8
function smallestSecond(Numbers) {
    if (Numbers.length < 2) {
      return "Error:Make sure the array contains a minimum of two numbers.";
    }
  
    
    let smallestSecond = Infinity;
    let smallest = Infinity;
  
    for (const Number of Numbers) {
      if (Number < smallest) {
        smallestSecond = smallest;
        smallest = Number;
      } else if (Number < smallestSecond && Number!== smallest) {
        smallestSecond = Number;
      }
    }
  
    return smallestSecond !== Infinity ? smallestSecond : "Error: All values in the array are identical.";
  }
  
  // Testing the function for finalResult
  const arrayExample = [8,3,2,5,9];
  const finalResult = smallestSecond(arrayExample);
  console.log(finalResult); 
  // Output: 3
  