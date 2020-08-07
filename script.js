// a password generator will produce a password with 8-128 characters based on the choices the user makes 

//Assignment code + event listener to prompt questions when button pushed

document.querySelector("#generate").addEventListener("click", generatePassword);

// character arrays
var number = "0123456789".split("");
var symbols = "~!@#$%^&*()_-+={}[]<>?".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


// prompt to confirm the number of characters they want in their password
    function generatePassword() {
        var confirmLength = parseInt(prompt("Enter the number of characters you would like in your password. Must be between 8 - 128."));

        // Loop if they don't put enough or too many 
        while(confirmLength <= 7 || confirmLength >= 129 || isNaN(confirmLength)) {
            alert("Password length needs to be between 8-128 characters. Please try again. :)");
            var confirmLength = parseInt(prompt("How many characters do you want your password to be?"));
        }

            // Reiterate the number of characters the user chose
            alert(`Your password will have ${confirmLength} characters`);

            //have user choose that character types they want in their password
            var confirmSym = confirm("click OK to confirm that you would like symbols or special characters in your password");
            var confirmNum = confirm("click OK to confirm that you would like numbers in your password");
            var confirmLower = confirm("click OK to confirm that you would like lower case letters in your password");
            var confirmUpper = confirm("click OK to confirm that you would like upper case letters in your password");
            
            //Loop for if the user doesn't choose a character type
            while(!confirmUpper && !confirmLower && !confirmNum && !confirmSym) {
            alert("You must choose at least one option");
            var confirmSym = confirm("click OK to confirm that you would like symbols or special characters in your password");
            var confirmNum = confirm("click OK to confirm that you would like numbers in your password");
            var confirmLower = confirm("click OK to confirm that you would like lower case letters in your password");
            var confirmUpper = confirm("click OK to confirm that you would like upper case letters in your password");
            }

            // assign an action to the password parameters 
            var passwordCharacters = []

            function concat(confirm, arr) {
                if (confirm) {
                    passwordCharacters = passwordCharacters.concat(arr)
                }
        } 

        concat(confirmSym, symbols);
        concat(confirmNum, number);
        concat(confirmLower, lowerCase);
        concat(confirmUpper, upperCase);

    
        // console.log(passwordCharacters)


        // the string that is generated based on what the user chooses

        var randomPassword = ""

        for (var i = 0; i < confirmLength; i++) {
            randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
            // console.log(randomPassword)
        }var passwordText = document.querySelector("#password");

        passwordText.value = randomPassword;

        }
