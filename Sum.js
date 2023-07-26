// Task-2
function positiveNumberSum(Numbers) {
    let Sum = 0;
    for (const Num of Numbers) {
      if (Num > 0) {
        Sum += Num;
      }
    }
    return Sum;
  }
  
  // Testing the function for finalResult
  const arrayExample = [2, -5, 10, -3, 7];
  const finalResult = positiveNumberSum(arrayExample);
  console.log(finalResult); 
  // finalResult: 19
  