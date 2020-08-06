# password-generator
using javascript to generate random passwords

This project was about creating functions to produce a random password with 8-128 characters with arrays for lowercase, uppercase, numbers, and symbols.

the html and css was given for the project, so I only was responsible for the javascript.
the process for writing the javascript was lengthy.

I first started by doing a lot researching and referencing.
I watched several youtube tutorials to get a feel for how to structure the code and get it flow.
Once I felt I had a better understanding, began by simply getting my arrays put together and thinking of the flow of the generator.

Once the arrays were done, I moved on to the generatePassword function.
    -First thing first is to ask the user how many characters they want in their password via the confirmLength variable and writing a loop to make sure they chose within the specified parameters.
    -Next, an alert to confirm the choice the user made.
    -Then, the user needed to choose what character types they want to use in their password through a series of confirms.
    -And with those confirms, a loop needed to be created in case the user doesn't choose any of the character options.
    -Once the character types have been chosen and confirmed, the action to those choices needs to be connected/created. Instead of writing out each function for each individual variable, I made a function that allowed you to plug in the function and the corresponding array. (My tutor helped me with this as I did have each one written out as it's own function.)
    -Called the functions as stated above.
    -Lastly wrote the function to generate the randomized string and show the new password.
     