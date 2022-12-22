// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function generatePassword (value, value2) {
// var password = "";

//   if (value == 8) {

//   }
//   return password;
// }


// must return a string value that is a password
// prompt- asking user to choose a number btween 8-128  


    // var to save lengeth
    // validate user num
// confirm user for confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // make each confirm a separate prompt (4)
    // validate that at least one of the categpries they said yes
    // 4 vars to save T/F to include characters
// vars that include all user options of each category
    // array of strings for each categofy
    
    // var upper = ["A", B"]
// if my user says yes to inlcude that category choose random (Math.random) elemeents from the array
// var choiceNumber = Math.floor(Math.random() * choiceArray.length);

    // how to decide how many elements from eaeah array
    // you can choose to place all the "Yes" characters into one bucket and then randomly choose which array to choose

    // going to need at least one for loop and several if / else statements
// join your chosen elements into a string
//return passwordString

    
    

function generatePassword() {
    var minNum = 8;
    var maxNum = 128;
    var finalPassword = ''
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24,'];
    var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

    var passwordLength = prompt("Please choose a password length from " + minNum + " to " + maxNum);
    if (passwordLength < minNum || passwordLength > maxNum) {
        passwordLength = prompt("Please choose a password length from " + minNum + " to " + maxNum);
    }
    var answerLowercase = confirm ("Do you want to include lowercase letters in your password?");
    if (!answerLowercase) {
       answerUppercase = confirm ("Do you want to include UPPERCASE letters in your password?");
    }
    var answerUppercase = confirm("Do you want to include UPPERCASE letters in your password?");
    if (!answerUppercase) {
        answerNumbers = confirm ("Do you want to include numb3rs in your password?");
     }
    var answerNumbers = confirm("Do you want numbers included in your password?");
    if (!answerNumbers) {
        answerSpecialCharacters = confirm ("Do you want to add spec!al ch@r@cters in your passwword?");
     }
   
    var answerSpecialCharacters = confirm("Do you want to add spec!al ch@r@cters in your passwword?")
    if (!answerSpecialCharacters) {
     }
    if (answerUppercase);
    for ( var i = 0; i < passwordLength; i++) {
      var index =  Math.floor(Math.random() * upperCase.length);
      var randomLetter = upperCase[index];
      finalPassword += randomLetter;
    }
    if (answerLowercase);
    for ( var i = 0; i < passwordLength; i++) {
        var index =  Math.floor(Math.random() * lowerCase.length);
        var randomLower = lowerCase[index];
        // finalPassword += randomLetter.concat(randomLower);
      }
    if (answerNumbers);
    for ( var i = 0; i < passwordLength; i++) {
        var index =  Math.floor(Math.random() * number.length);
        var randomNumber = number[index];
        // finalPassword += randomLetter.concat(randomLower, randomNumber);
      }
    if (answerSpecialCharacters);
    for ( var i = 0; i < passwordLength; i++) {
        var index =  Math.floor(Math.random() * specialCharacters.length);
        var randomCharacter = specialCharacters[index];
        finalPassword += randomLetter.concat(randomLower, randomNumber, randomCharacter);
      }

    return finalPassword;
}

generatePassword();