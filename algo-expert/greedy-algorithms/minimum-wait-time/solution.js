//https://www.algoexpert.io/questions/Minimum%20Waiting%20Time
/*
Input:
  non-empty array of positive integers representing amounts of time that specific queries take to execute
  queries are executed synchronously, but can be executed in any order
Task:
  write function that returns minimum amount of total waiting time for all queries

Approach:
  sort the array, execute from smallest to largest, this will be O(n*log(n)) time
 */
//Time: O(n* log(n)) / Space: O(1)
function minimumWaitingTime(queries) {
  queries.sort((a,b) => a-b);
  let lastRun = 0;
  let total = 0;
  for(let i = 1; i < queries.length;i++) {
    lastRun += queries[i-1]; //the time we've waited so far, plus the execution time of the last query
    total += lastRun; //keep track of the total wait time
  }
  return total;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
