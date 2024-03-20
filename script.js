var generate = function(numRows) {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    res.push(row);
  }

  return res;
};

document.getElementById("submit").addEventListener("click", function() {
  const input = document.getElementById("intervalsInput").value;
  const numRows = parseInt(input);
  if (!isNaN(numRows) && numRows >= 1 && numRows <= 30) {
    const result = generate(numRows);
    document.getElementById("output").innerText =
      "Output: " + JSON.stringify(result);
  } else {
    document.getElementById("output").innerText =
      "Invalid input. Please enter a number of rows between 1 and 30.";
  }
});

document
  .getElementById("intervalsInput")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handlePascalsTriangleGeneration();
    }
  });

function handlePascalsTriangleGeneration() {
  const input = document.getElementById("intervalsInput").value;
  const numRows = parseInt(input);
  if (!isNaN(numRows) && numRows >= 1 && numRows <= 30) {
    const result = generate(numRows);
    document.getElementById("output").innerText =
      "Output: " + JSON.stringify(result);
  } else {
    document.getElementById("output").innerText =
      "Invalid input. Please enter a number of rows between 1 and 30.";
  }
}
