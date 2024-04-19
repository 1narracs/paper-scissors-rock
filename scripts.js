const choices = ["scissors", "paper", "rock"];
let player_choice;
let computer_choice;

function resetPlayerChoice() {
  player_choice = setPlayerChoice();
}

function setPlayerChoice() {
  let user_input = prompt("Scissors, Paper, or Rock?").toLowerCase();
  let accepted = 0;

  while (accepted == 0) {
    if (choices.indexOf(user_input) >= 0) {
      console.log(
        "You choose: " + user_input.replace(/\b\w/g, (s) => s.toUpperCase())
      );
      accepted = 1;
    } else {
      user_input = prompt(
        "Please choose a valid option: Scissors, Paper, or Rock?"
      ).toLowerCase();
    }
  }

  return user_input;
}

function resetComputerChoice() {
  computer_choice = setComputerChoice();
}

function setComputerChoice() {
  let roll = Math.floor(Math.random() * choices.length);
  let computer_choice = choices[roll];
  return computer_choice;
}

function playRound() {
  resetPlayerChoice();
  resetComputerChoice();

  if (player_choice == computer_choice) {
    return "tie";
  } else if (
    (player_choice == "rock" && computer_choice == "scissors") ||
    (player_choice == "scissors" && computer_choice == "paper") ||
    (player_choice == "paper" && computer_choice == "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function playGame() {
  let round = 1;
  let player_score = 0;
  let computer_score = 0; 

  while (round <= 5) {
    let result = playRound();

    if (result == "tie") {
      alert(
        `Player chose: ${player_choice}\nComputer Chose: ${computer_choice}\n-- Tie --\nPlaying round ${round} again...\n---Scores---\nPlayer: ${player_score}\nComputer: ${computer_score};`
      );
    } else if (result == "player") {
      player_score += 1;
      alert(
        `Player chose: ${player_choice}\nComputer Chose: ${computer_choice}\n-- Player wins round ${round}! --\n***Scores***\nPlayer: ${player_score}\nComputer: ${computer_score}`
      );
      round += 1;
    } else if (result == "computer") {
      computer_score += 1;
      alert(
        `Player chose: ${player_choice}\nComputer Chose: ${computer_choice}\n-- Computer wins round ${round}! --\n***Scores***\nPlayer: ${player_score}\nComputer: ${computer_score}`
      );
      round += 1;
    }
  }

  if (player_score > computer_score) {
    alert("Player wins the game! Congratulations");
    return "player";
  } else {
    alert("Computer wins... Try again?");
    return "computer";
  }
}
