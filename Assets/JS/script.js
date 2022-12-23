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

function generatePassword() {
    var minNum = 8;
    var maxNum = 128;
    var finalPassword = []
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

    var passwordLength = prompt("Please choose a password length from " + minNum + " to " + maxNum);
    while (passwordLength < minNum || passwordLength > maxNum) {
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
    var numSpecialCharArray = [];

    if (answerNumbers || answerSpecialCharacters) {
       randomNumSpecialChar = Math.floor(Math.random() * (passwordLength - 3));
       while (randomNumSpecialChar < 1) {
        randomNumSpecialChar = Math.floor(Math.random() * (passwordLength - 3));
       }

        for (var i = 1; i <= randomNumSpecialChar; i++) {
            if ((answerNumbers && answerSpecialCharacters && i % 2 === 0) || (answerNumbers && !answerSpecialCharacters)) {
                var randomNumber = Math.floor(Math.random() * 9);
                numSpecialCharArray.unshift(randomNumber);
            } else if ((answerNumbers && answerSpecialCharacters && i % 2 !== 0) || (!answerNumbers && answerSpecialCharacters)) {
                var index = Math.floor(Math.random() * specialCharacters.length);
                var randomCharacter = specialCharacters[index];
                numSpecialCharArray.unshift(randomCharacter);
            } 
        }
    };

    var passwordLetters = passwordLength - randomNumSpecialChar;
    var partialPassword = randomUpperLower(answerUppercase, answerLowercase, passwordLetters, alphabet);
    finalPassword = numSpecialCharArray.concat(partialPassword);

    //using Fisher Yates shuffle method to randomly sort an array referenced here
    //https://stackoverflow.com/questions/64925666/how-can-i-sort-an-array-randomly-in-javascript
    for (var i = 0; i <= passwordLength; i++) {
        j = Math.floor(Math.random() * i)
        k = finalPassword[i]
        finalPassword[i] = finalPassword[j]
        finalPassword[j] = k
    }

    return finalPassword.join('');
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
       
    