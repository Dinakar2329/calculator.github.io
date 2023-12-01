let result = document.getElementById("result");

//display result when enter key is clicked
result.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    try {
      result.value = eval(result.value);
    } catch (err) {
      alert("Invalid / Syntax Error");
    }
  }
});

// To display the numbers
function display(val) {
  result.value += val;
}

//TO clear the numbers
function AC() {
  result.value = "";
}

//TO calcuate the given numbers
function calculate(num) {
  try {
    result.value = eval(result.value);
    
  } catch (err) {
    alert("Invalid / Syntax Error");
    result.value = "";
  }
}

//TO delete last single variable
function del() {
  result.value = result.value.slice(0, -1);
}
