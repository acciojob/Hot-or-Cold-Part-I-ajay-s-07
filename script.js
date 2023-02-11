//your code here
document.getElementById("btn").addEventListener("click", function() {
  var randomNumber = Math.floor(Math.random() * 41) - 20;
  document.getElementById("num").innerHTML = randomNumber;
});

