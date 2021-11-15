//https://www.algoexpert.io/questions/Tournament%20Winner
/*
  Input: 2 arrays
    first array (competitions): an array of arrays (representing matches in a tournament) ,
    which each sub array containing the name of two teams which are competing in a competition (match)

    second array (results): a number indicating if the home team won or the away team won
    1 = home team, which corresponds to 0 in the match array and;
    0 = away team, which corresponds to 1 in the match array
  Guarantees:
    there is always one winner
    team names are always <= 30 characters
    each tame will face any other team exactly once
    team receives 3 points

  Task: write a function to determine the winner

  Approach:
    1. loop through the results array, determine the winner of a match, then add that team to
        a teams object to keep track of their points
    2. update a variable which keeps track of which team has the most points so far

 */

function tournamentWinner(competitions, results) {
  let teamPoints = {};
  let winner = '';
  for(let i = 0; i < results.length; i++) {
    let winnerIdx = !results[i] + 0;
    let team = competitions[i][winnerIdx];
    teamPoints[team] = !teamPoints[team] ? 3 : teamPoints[team] + 3;
    if(winner === '' || teamPoints[winner] < teamPoints[team]) {
      winner = team;
    }
  }
  return winner;
}

