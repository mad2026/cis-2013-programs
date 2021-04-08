/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount, stringExit;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
while (!stringExit)
{
    intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range:")); //get the value from the user
    while (intMin < 0 || intMin == null || isNaN(intMin)) //check to make sure that intMin is a value greater than 0 and is not null or NaN
    {
        alert("You have entered an incorrect value for the lowest number. please enter a value greater than or equal to 0"); //Warn the user that they have entered an invalid value
        intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range:")); //request that the user enter a new value
    } 

    /* the following section prompts the user to enter the high number of their guessing range
    * and then validates that the user entered an actual number and make sure that the
    * number is at least 2 more than the minimum (so that there is some guessing involved).
    */

    intMax = parseInt(prompt("Choose the highest number in your guessing range: \n Note: your highest number must be at least 2 more than " + intMin)); //get the value from the user
    while (intMax < (intMin + 2) || intMax == null || isNaN(intMax)) //check to make sure that intMax is a value greater than intMin + 2 and is not null or NaN
    {
        alert("You have entered an incorrect value for the highest number. please enter a value at least 2 more than " + intMin); //Warn the user that they have entered an invalid value
        intMax = parseInt(prompt("Choose the highest number in your guessing range: \n Note: your highest number must be at least 2 more than " + intMin)); //request that the user enter a new value
    } 

    /*The following line of code generates the random number to be used in the guessing game.
    * Math.floor rounds the random number down to the nearest integer
    * Math.random() generates a random number between 0 and 1
    * the portion of (intMax-intMin +1) provides the range of random values
    * the addition of + intMin provides the floor for the random number 
    */
    intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


    // set the loop counter

    intCount = 1;

    /* the following section prompts the user to enter their guess
    * and then validates that the user entered an actual number and makes sure that the
    * number is between the allowed max and min number choices.
    */


    function guessValidation() //create a function that can be called to validate intGuess
    {
        intGuess = parseInt(prompt("What is your guess on the random number between " + intMin + " and " + intMax)); //get the value from the user
        while (intGuess < intMin || intGuess > intMax || intGuess == null || isNaN(intGuess)) //check to make sure that intMax is a value greater than intMin + 2 and is not null or NaN
        {
            alert("You have entered an incorrect value for your guess. please enter a value between " + intMin + " and " + intMax); //Warn the user that they have entered an invalid value
            intGuess = parseInt(prompt("What is your guess on the random number between " + intMin + " and " + intMax)); //request that the user enter a new value
        } 
    }

    guessValidation(); //call guess validation once to gather the first guess

    /* The following section provides the main loop and logic for the program.
    * The user's guess is compared to the randomly generated number and feedback
    * is given based upon whether the guess is higher or lower. The loop exits when
    * the user chooses the correct number. Each time through the loop updates the loop counter.
    */

    while (intGuess != intRandom) //Checks to see if the user guessed the correct value and prompts them to guess again if they were wrong.
    {
        if (intGuess < intRandom)
        {
            alert("Your choice of " + intGuess + " is too Low! Please try again."); //Warn the user that they have entered is lower than the random number
        } 
        else
        {
            alert("Your choice of " + intGuess + " is too High! Please try again."); //Warn the user that they have entered is higher than the random number

        }
        intCount++;
        guessValidation(); //request that the user enter a new value
    } 

    // provides final output upon successful guessing
    alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
            " and it only took you " + intCount + " attempts!");
    
    stringExit = prompt("Type anything here to Exit the program, otherwise just press OK or Cancel to play again"); //repeat the program until the user stops it by entering any value here
}