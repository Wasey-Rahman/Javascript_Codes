// Task-7
function convertingRomanToInteger(numeralOfRoman) {
    const numeralOfRomans = {
      'I': 1,
      'V': 5,
      'X': 10,
      
    };
  
    
    let valueOfPrevious = 0;
    let integer = 0;
  
    for (let i = numeralOfRoman.length - 1; i >= 0; i--) {
      const currentRomanNumeral = numeralOfRoman[i];
      const valueOfCurrent = numeralOfRomans[currentRomanNumeral];
  
      if (valueOfCurrent < valueOfPrevious) {
        integer -= valueOfCurrent;
      } else {
        integer += valueOfCurrent;
      }
  
      valueOfPrevious = valueOfCurrent;
    }
  
    return integer;
  }
  
  // Testing the function for finalResult
  const numeralOfRomanOne = "IX";
  const numeralOfRomanTwo = "XXI";
  console.log(convertingRomanToInteger(numeralOfRomanOne)); // finalResult: 9
  console.log(convertingRomanToInteger(numeralOfRomanTwo)); // finalResult: 21
  