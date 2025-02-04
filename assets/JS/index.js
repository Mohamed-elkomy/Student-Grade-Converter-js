/**
 * This function calculates the grade based on the user input
 * and displays the grade in the <p> tag.
 */
let calculate = () => {
  let input = document.querySelector("input"); // Selects the input field
  let p = document.querySelector("p"); // Selects the paragraph to display results
  let userDegree = parseFloat(input.value); // Converts the input value to a float

  // Check if the user input is valid
  if (isNaN(userDegree) || userDegree < 0 || userDegree > 100) {
    p.innerHTML = "Invalid input"; // Displays an error message for invalid input
    return; // Exits the function
  }

  // Calculate the grade based on the user input
  if (userDegree >= 90) {
    p.innerHTML = "A+"; // Displays grade A+
  } else if (userDegree >= 85) {
    p.innerHTML = "A"; // Displays grade A
  } else if (userDegree >= 80) {
    p.innerHTML = "A-"; // Displays grade A-
  } else if (userDegree >= 75) {
    p.innerHTML = "B+"; // Displays grade B+
  } else if (userDegree >= 70) {
    p.innerHTML = "B"; // Displays grade B
  } else if (userDegree >= 65) {
    p.innerHTML = "B-"; // Displays grade B-
  } else if (userDegree >= 60) {
    p.innerHTML = "C+"; // Displays grade C+
  } else if (userDegree >= 55) {
    p.innerHTML = "C"; // Displays grade C
  } else if (userDegree >= 50) {
    p.innerHTML = "C-"; // Displays grade C-
  } else if (userDegree >= 45) {
    p.innerHTML = "D+"; // Displays grade D+
  } else if (userDegree >= 40) {
    p.innerHTML = "D"; // Displays grade D
  } else {
    p.innerHTML = "F"; // Displays grade F
  }
};

// Add event listener to the input field
// let input = document.querySelector("input");
// input.addEventListener("input", calculate);
