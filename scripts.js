function paperScissorsRock() {
  let acceptable_input = ["scissors", "paper", "rock"];
  let input = prompt("Scissors, Paper, or Rock?");
  if (acceptable_input.indexOf(input.toLowerCase()) >= 0) {
    console.log(
      "You chose: " +
        input.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())
    );
  }
}
