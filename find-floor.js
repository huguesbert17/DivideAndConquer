function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high){
       return -1;
    }
    else if (num >= arr[high]) {
      return arr[high];
    }
  
    let median = Math.floor((low + high) / 2)
  
    if (arr[median] === num) return arr[median];
  
    if (median > 0 && arr[median - 1] <= num && num < arr[median]) return arr[median - 1];
  
    if (num < arr[median]) return findFloor(arr, num, low, median - 1);
  
    return findFloor(arr, num, median + 1, high)
  }
  
  module.exports = findFloor

module.exports = findFloor