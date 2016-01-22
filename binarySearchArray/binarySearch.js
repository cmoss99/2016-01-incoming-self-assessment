/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the target
  
  set index start = 0 and end = -1.
  
  calculate search as the average of ending index and starting index rounded down
  
  If array[search] equals the target then stop the loop and return search.
  
  If the search was too low, array[search] less than target, then set starting index to = search + 1.
  
  If the search was too high, set ending index to = search - 1.
*/ 
  
  // The inputs are the array, the number n of elements in array; and target, the number being searched for. The output is the index in array of target

/*
  takes an SORTED array, and target element
    assign the min index
    assign the last index
    while ()
      calculate midpoint/index of array
      split array into two by midpoint
      if 

  returns index of element in array, or -1 if not in array
*/
var binarySearch = function (array, target) {
  var minIndex = 0;
  var maxIndex = array.length - 1; 
  var currentIndex;
  var currentItem;
  while(minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentItem = array[currentIndex];

    if (currentItem < target) {
      minIndex = currentIndex + 1;        //moving window
    } else if (currentItem > target) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
};



var nums = [1,2,3,4,5,6];
console.log(binarySearch(nums, -20));