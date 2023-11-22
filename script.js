function calculateSum(...numbers) {
    var resultElement = document.getElementById("result");

    // Check if the array contains only numbers
    if (numbers.every(Number.isFinite)) {
      // Calculate the sum
      var sum = numbers.reduce((acc, num) => acc + num, 0);
      resultElement.innerHTML = "Sum of numbers: " + sum;
    } else {
      resultElement.innerHTML = "Provide only numbers.";
    }
  }
