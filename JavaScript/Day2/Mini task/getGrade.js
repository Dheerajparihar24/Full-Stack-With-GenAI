// Build a function getGrade(score) that takes a numeric score (0–100) and returns a letter grade using this scale:

// 90+ → "A"
// 80–89 → "B"
// 70–79 → "C"
// 60–69 → "D"
// Below 60 → "F"

// Use return, not console.log, inside the function (remember yesterday's lesson).
// Handle invalid input: if score is not a number, or is outside 0–100, return "Invalid score".

function getGrade(score) {
  if (typeof score !== "number") {
    return "Please Enter a number!";
  }

  if (score > 100 || score < 0) {
    return "Invalid Score";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(5))




