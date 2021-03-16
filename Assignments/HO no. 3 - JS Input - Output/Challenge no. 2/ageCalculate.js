var floatAgeYears, floatAgeMonths, intAgeFortnights, intAgeWeeks, floatAgeDays;
     
floatAgeYears = parseFloat(prompt("Enter age in years"));
floatAgeDays = parseFloat(floatAgeYears * 365.25);
floatAgeMonths = parseFloat(floatAgeYears * 12);
intAgeWeeks = parseInt(floatAgeDays / 7);
intAgeFortnights = parseInt(floatAgeDays / 14);
alert("You are " + floatAgeYears + " years old!\n" + floatAgeDays + " days old!\n" + floatAgeMonths + " months old!\n" + intAgeWeeks + " weeks old!\n" + intAgeFortnights + " fortnights old!");