// the password generator will provide a password with 8-128 characters based on the criteria the user specifies

//Assignment code + event listener to prompt questions when button pushed

document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", ":", ";"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Variable Declaration

var confirmLength = "";
var confirmNum;
var confirmSym;
var confirmLower;
var confirmUpper;

// prompt to confirm how many characters the user would like in their password

    function generatePassword() {
        var confirmLength = (prompt("How many characters do you want your password to be?"));

        // Loop if answer is outside the parameters

        while(confirmLength <= 7 || confirmLength >= 128) {
            alert("Password length needs to be between 8-128 characters. Please try again. :)");
            var confirmLength = (prompt("How many characters do you want yout password to be?"));
        }

        // Repeat back how many characters the user will have 
        alert(`Your password will have ${confirmLength} characters`);

            // Determine parameters of password

        var confirmSym = confirm("click OK to confirm that would like symbols or special characters in your password");
        var confirmNum = confirm("click OK to confirm that would like numbers in your password");
        var confirmLower = confirm("click OK to confirm that you would like lower case letters in your password");
        var confirmUpper = confirm("click OK to confirm that you would like upper case letters in your password");
            // Loop for if answer is outside the parameters
        while(confirmUpper === false && confirmLower === false && confirmNum === false && confirmSym === false) {
        alert("You must choose at least one option");
        var confirmSym = confirm("click OK to confirm that would like symbols or special characters in your password");
        var confirmNum = confirm("click OK to confirm that would like numbers in your password");
        var confirmLower = confirm("click OK to confirm that you would like lower case letters in your password");
        var confirmUpper = confirm("click OK to confirm that you would like upper case letters in your password");
        }

        // assign an action to the password parameters 
        var passwordCharacters = []

        if (confirmSym) {
            passwordCharacters = passwordCharacters.concat(symbols)
        }
        if (confirmNum) {
            passwordCharacters = passwordCharacters.concat(number)
        }
        if (confirmLower) {
            passwordCharacters = passwordCharacters.concat(lowerCase)
        }
        if (confirmUpper) {
            passwordCharacters = passwordCharacters.concat(upperCase)
        }

        console.log(passwordCharacters)


        // empty string to be filled based on for loop selecting random characters from the array

        var randomPassword = ""

        for (var i = 0; i < confirmLength; i++) {
            randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
            console.log(randomPassword)
        }
        return randomPassword;
        }

// write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}