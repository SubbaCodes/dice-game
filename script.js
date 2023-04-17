let a;
let b;
let c;

let count = 0;

let rollButton = document.getElementById("rollBtn");

rollButton.onclick = function () {
  count += 1;

  a = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice1").innerHTML = a;

  b = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice2").innerHTML = b;

  c = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice3").innerHTML = c;

  if (a.valueOf() === b.valueOf() && b.valueOf() === c.valueOf()) {
    document.getElementById("banner").innerHTML = "You got Jack Pot!";
    document.getElementById("count").innerHTML = "Number of Counts: " + count;
  }
};
