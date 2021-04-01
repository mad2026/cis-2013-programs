var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;
//Gather the final Homework total points and ensure that the number is only a positive float value between and including 0-30
floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));
while (floatHwPts < 0 || floatHwPts > 30 || floatHwPts == null || isNaN(floatHwPts))
{
    alert("You have entered an incorrect value for Homework Points. please enter a value between 0-30");
    floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));
} 
//Gather the Midterm points and ensure that the number is only a positive float value between and including 0-35
floatMidPts = parseFloat(prompt("Please enter midterm pts (0-35):"));
while (floatMidPts < 0 || floatMidPts > 35 || floatMidPts == null || isNaN(floatMidPts))
{
    alert("You have entered an incorrect value for midterm points. please enter a value between 0-35");
    floatMidPts = parseFloat(prompt("Please enter final HW pts (0-35):"));
} 
//Gather the final points and ensure that the number is only a positive float value between and including 0-35
floatFinPts = parseFloat(prompt("Please enter final pts (0-35):"));
while (floatFinPts < 0 || floatFinPts > 35 || floatFinPts == null || isNaN(floatFinPts))
{
    alert("You have entered an incorrect value for final points. please enter a value between 0-35");
    floatFinPts = parseFloat(prompt("Please enter final HW pts (0-35):"));
} 
//calculate the total value of all the points entered
floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);
//Gather the info regarding the course grading status and ensure that the number is only a positive integer value 1 or 2
intGradeOption = parseInt(prompt("Is the course audit pass/fail (1) or letter grade (2)?"))
while(intGradeOption < 1 || intGradeOption > 2 || intGradeOption == null || isNaN(intGradeOption))
{
    alert("You have entered an incorrect value for course grading status. please enter either 1 or 2");
    intGradeOption = parseInt(prompt("Is the course audit pass/fail (1) or letter grade (2)?"))
} 
    //calculate the grade based upon a Pass/Fail course grading status
    if (intGradeOption === 1)
    {
        if(floatTotalPts >= 80)
        {
            stringFinalGrade = "Pass";
        }
        else
        {
            stringFinalGrade = "Fail";
        }
    }
    //calculate the grade based upon a normal lettering basis
    else if(intGradeOption === 2)
    {
        if(floatTotalPts >= 90)
        {
            stringFinalGrade = "A";
        }
        else if (floatTotalPts >= 80 && floatTotalPts < 90)
        {
            stringFinalGrade = "B";
        }
        else if (floatTotalPts >= 70 && floatTotalPts < 80)
        {
            stringFinalGrade = "C";
        }
        else if (floatTotalPts >= 60 && floatTotalPts < 70)
        {
            stringFinalGrade = "D";
        }
        else
        {
            stringFinalGrade = "F";
        }
    }
//output the final grade.
alert("Your final grade is: " +stringFinalGrade);