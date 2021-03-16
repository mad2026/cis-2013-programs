var floatMiles, floatGallons, mpg;
     
floatMiles = parseFloat(prompt("Enter miles driven"));
floatGallons = parseFloat(prompt("Enter gallons of gas used"));
mpg = floatMiles/floatGallons;
alert("Miles per gallon = " + mpg);