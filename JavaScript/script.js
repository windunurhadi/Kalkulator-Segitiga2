function calculate() {
    // Get values from input fields
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);
  
    // Check if values are valid
    if (isNaN(base) || isNaN(height) || isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers for all fields.";
      return;
    }
  
    // Calculate area and perimeter
    var area = 0.5 * base * height;
    var perimeter = side1 + side2 + side3;
  
    // Display the result
    document.getElementById("result").innerHTML = "Area: " + area.toFixed(2) + "<br>Perimeter: " + perimeter.toFixed(2);
  }