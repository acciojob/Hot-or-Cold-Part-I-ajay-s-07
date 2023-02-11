//your code here
var targetNumber;

document.getElementById("btn").addEventListener("click", function() {
  targetNumber = Math.floor(Math.random() * 41) - 20;
  document.getElementById("guess").innerHTML = "";
  document.getElementById("respond").innerHTML = "";
});

document.getElementById("guess").addEventListener("input", function() {
  var guess = parseInt(document.getElementById("guess").innerHTML);
  if (Math.abs(targetNumber - guess) <= 5) {
    document.getElementById("respond").innerHTML = "Hot";
  } else {
    document.getElementById("respond").innerHTML = "Cold";
  }
});

