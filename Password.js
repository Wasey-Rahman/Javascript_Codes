// Task-6
function password(Length) {
    const lettersOfUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lettersOfLowercase = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const characterWhichIsSpecial = '!@#$%^&*()_-+=<>?/[]{},.:;';
  
    const charsOfAll = lettersOfUppercase + lettersOfLowercase + digits + characterWhichIsSpecial;
  
    let randomPassword = '';
    for (let i = 0; i < Length; i++) {
      const indexOfRandom = Math.floor(Math.random() * charsOfAll.length);
      randomPassword += charsOfAll[indexOfRandom];
    }
  
    return randomPassword;
  }
  
  // Specifying the random password length
  const lengthOfPassword = 18;
  const finalResult = password(lengthOfPassword);
  console.log(finalResult);