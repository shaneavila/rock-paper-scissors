function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let rand = choices[Math.floor(Math.random()*choices.length)];
  return rand;
}
