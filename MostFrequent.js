// Task-3
function mostFrequentElement(Array) {
    const countingElement = {};
  
    // Counting the occurrences of each Element in the array
    for (const Element of Array) {
      if (countingElement[Element]) {
        countingElement[Element]++;
      } else {
        countingElement[Element] = 1;
      }
    }
  
    // Finding the most frequent Element
    let mostFrequentElement;
    let countMax = 0;
    for (const Element in countingElement) {
      if (countingElement[Element] > countMax) {
        countMax = countingElement[Element];
        mostFrequentElement = Element;
      }
    }
  
    return parseInt(mostFrequentElement);
  }
  
  // Testing the function for finalResult
  const arrayExample = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const finalResult = mostFrequentElement(arrayExample);
  console.log(finalResult); 
  // finalResult: 3
  
