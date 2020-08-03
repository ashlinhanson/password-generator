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


// generator functions - http://www.net-comber.com/charset.html



function getLower() {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getUpper() {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return upperCase[Math.floor(Math.random() * upperCase.length)];

function getNumber() {
    const numbers = '0123456789'
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    const symbols = '~!@#$%^&*()+=:;'
    return symbols[Math.floor(Math.random() * symbols.length)];
