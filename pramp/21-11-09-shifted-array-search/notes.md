#Shifted Array Search

### Things to consider
- the input is basically two sorted arrays
- numbers are unique
- we can search a sorted array in O(logN) time using a binary search
- we'll need to find the pivot point (start of the second array)
  - We can use a binary search strategy to find the pivot point
  - What conditions does this point meet?
    - `mid === 0`
    - `arr[mid] < arr[mid-1]`
- once we have the pivot we'll need to determine what side of the array we're going to investigate
- **Go right**:
  - `num < arr[0]` - everything on the right array satisfies this condition
  - `binarySearch(arr, pivot, arr.length-1, num);`
- **Go left**:
  - `num > arr[0]`- everything on the left satisfies this condition (could also just be an `else`)
  - `binarySearch(arr, 0, pivot - 1, num);`
- **Edge case**:
  - `pivot === 0` - evaluate the entire array, it wasn't shifted, can be handled with

###Binary search strategy
- take a midpoint index `Math.floor((end-start) / 2) + start`
  - ####Conditions
    - `num === arr[mid]`: number is found, we can return it
    - `num > arr[mid]`: the number is on the right side
      - set `start = arr[mid+1]`
    - `else`: the number is on the left side
      - set `end = mid - 1`
  - never found, return -1


##Time and Space Analysis
- **Time**
  - Binary search, and finding the midpoint are divide and conquer strategies, where you're discarding half the inputs
  - Your worst cast performance is O(logN) because as you double N, the number of operations increases by 1
  - logN = x, where x is the number of operations and N is the inputs
  - equivalent to 2^x = n
  - log4 = 2 = 2^2 = 4
  - log8 = 3 = 2^3 = 8
  - Find Pivot(logN) + Binary Search (logN) = 2logN = logN
- **Space**
  - O(1) - we're not using any extra space other than a few variables

##Make sure to remember this
- when calculating the midpoint you have to add the offset start
  