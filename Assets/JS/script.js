// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

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
    var finalPassword = []
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

    var passwordLength = prompt("Please choose a password length from " + minNum + " to " + maxNum);
    if (passwordLength < minNum || passwordLength > maxNum) {
        passwordLength = prompt("McFly! Please choose a password length from " + minNum + " to " + maxNum);
    }

    var answerLowercase = confirm("DO YOU WANT TO INCLUDE lowercase LETTERS IN YOUR PASSWORD");
    var answerUppercase = confirm("Do you want to include UPPERCASE letters in your password?");

    while (!answerLowercase && !answerUppercase) {
        alert("you must choose either uppercase and/or lowercase");
        answerLowercase = confirm("DO YOU WANT TO INCLUDE lowercase LETTERS IN YOUR PASSWORD");
        answerUppercase = confirm("Do you want to include UPPERCASE letters in your password?");
    }

    var answerNumbers = confirm("Do you want to include numb3rs in your password?");
    var answerSpecialCharacters = confirm("Do you want to add spec!al ch@r@cters in your passwword?");
    var randomNumSpecialChar = 0;

    if (answerNumbers || answerSpecialCharacters) {
       randomNumSpecialChar = Math.floor(Math.random() * passwordLength);

        for (var i = 0; i <= randomNumSpecialChar; i++) {
            if ((answerNumbers && answerSpecialCharacters && i % 2 === 0) || (answerNumbers && !answerSpecialCharacters)) {
                var randomNumber = Math.floor(Math.random() * 100);
                finalPassword.unshift(randomNumber);
            } else if ((answerNumbers && answerSpecialCharacters && i % 2 !== 0) || (!answerNumbers && answerSpecialCharacters)) {
                var index = Math.floor(Math.random() * specialCharacters.length);
                var randomCharacter = specialCharacters[index];
                finalPassword.unshift(randomCharacter);
            } 
        }
    };

    var passwordLetters = passwordLength - randomNumSpecialChar;

    var partialPassword = randomUpperLower(answerUppercase, answerLowercase, passwordLetters, alphabet);
    return finalPassword.concat(partialPassword).join('');
};

function randomUpperLower(answerUppercase, answerLowercase, passwordLetters, alphabet) {
    var letterArray = [];
    for (var i = 0; i < passwordLetters; i++) {
        var index =  Math.floor(Math.random() * alphabet.length);
        var randomLetter = alphabet[index];
        
        if (answerLowercase && !answerUppercase) {
            letterArray.push(randomLetter.toLowerCase());
        } else if (answerLowercase && answerUppercase) {
            if (i % 2 === 0) {
            letterArray.push(randomLetter.toLowerCase());
            } else {
            letterArray.push(randomLetter);
            }
        } else if (answerUppercase && !answerLowercase) {
            letterArray.push(randomLetter);
        }
    }
    return letterArray;
}
       
    