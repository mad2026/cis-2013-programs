var $ = function (id) 
{
    return document.getElementById(id);
}
var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;


var calculate_click = function()
{
    //Gather the final Homework total points and ensure that the number is only a positive float value between and including 0-30
    floatHwPts = parseFloat($("hw_pts").value);
    if (floatHwPts < 0 || floatHwPts > 30 || floatHwPts == null || isNaN(floatHwPts))
    {
        alert("You have entered an incorrect value for Homework Points. please enter a value between 0-30");
        return;
    } 
    
    //Gather the Midterm points and ensure that the number is only a positive float value between and including 0-35
    floatMidPts = parseFloat($("mid_pts").value);
    if (floatMidPts < 0 || floatMidPts > 35 || floatMidPts == null || isNaN(floatMidPts))
    {
        alert("You have entered an incorrect value for midterm points. please enter a value between 0-35");
        return;
    } 
    //Gather the final points and ensure that the number is only a positive float value between and including 0-35
    floatFinPts = parseFloat($("fin_pts").value);
    if (floatFinPts < 0 || floatFinPts > 35 || floatFinPts == null || isNaN(floatFinPts))
    {
        alert("You have entered an incorrect value for final points. please enter a value between 0-35");
        return;
    } 
    //calculate the total value of all the points entered
    floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);
    //Gather the info regarding the course grading status and ensure that the number is only a positive integer value 1 or 2
    intGradeOption = parseFloat($("grade_option").value);
    if(intGradeOption < 1 || intGradeOption > 2 || intGradeOption == null || isNaN(intGradeOption))
    {
        alert("You have entered an incorrect value for course grading status. please enter either 1 or 2");
        return;
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
    $("final_grade").value = stringFinalGrade;
}

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};