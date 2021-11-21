//https://www.algoexpert.io/questions/Min%20Number%20Of%20Coins%20For%20Change
/*
Type: Minimum number of combinations(unlimited usages) equal to target

A combinations type problem should possibly hint at a dynamic programming solution because calculating combinations is often
costly, therefore we'll want to solve a smaller problem, save that solution and re-use it instead of re-calculating
the whole thing.


Approach:
	Start with the smallest coin , check to see if the current amount minus this coin is a way that's been calculated already
	if so, then add that number of coins to this + 1 (representing the coin we're currently evaluating)

	IMPORTANT NOTE:
		at every point we have the check to see if what's there is smaller than what we're trying to update it to
		we need to initialize the number of ways to INFINITY to be able to successfully make this comparison

	n = 6
	coins = [1,2, 3]


	Coin		0 1 2 3 4 5 6 - potential amounts that could be generated
	1 			0 1 2 3 4 5 6 - to calculate 2: 2(amount) - 1 (coin) = 1 (the remaining amount we need)
													check amount[1] it takes 1 coin to make 1
													1 (coins to make 1) + 1 (the current coin) = 2
	2				0 1 1	2 2 3 4	- we update 2 as follows 2(amount) - 2 (coin) = 0, amount[0] is 0 + 1 = 1
	3				0 1 1 1 2 2 2


	n = 7
	coins = [2,4]

	Coin   0 1 2 3 4 5 6 7
	2      0 0 1 0 2 0 3 0
	4      0 0 1 0 1 0 2 0
	can't make change


	n = 10
	coins = [1,3,4]

	Coins
	       0 1 2 3 4 5 6 7 8 9 10
	1      0 1 2 3 4 5 6 7 8 9 10
	3      0 1 2 1 2 3 2 3 4 3 4
	4      0 1 2 1 1 2             - when updating 6(CURRENT VALUE 2) using 4, we get 6-4 = 2  => 2 needs 2 coins, + 1(4 coin) = 3
	                                 we want to make sure we're not overwriting a smaller value

		*/



function minNumberOfCoinsForChange(n, denoms) {

  let ways = Array(n+1).fill(Infinity);
  ways[0] = 0;
  if(n === 0) { return 0;}

  for(let amount = 1; amount <= n; amount++) {
    for(let d = 0; d < denoms.length; d++) {
      let denom = denoms[d];
      if(denom <= amount) {
        let diff = amount - denom;
        ways[amount] = Math.min(ways[amount], ways[diff] + 1); //make sure we're not replacing a smaller value with a larger one
      }
    }
  }
  return ways[n] === Infinity ? -1 : ways[n]
}
