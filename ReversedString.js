// Task-1
function stringReverse(stringExample) {
  let stringReversed = '';
  for (let i = stringExample.length - 1; i >= 0; i--) {
    stringReversed += stringExample[i];
  }
  return stringReversed;
}

// Testing the function for  finalResult
const stringExample = "hello world";
const finalResult = stringReverse(stringExample);
console.log(finalResult); 
// finalResult: "dlrow olleh"
