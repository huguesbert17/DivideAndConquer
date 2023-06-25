function countZeroes() {
    let firstElement = getFirst(arr)
    if (firstElement === -1) {
        return 0;
    }
  console.log(countZeroes([1, 1, 1, 1, 0, 0]))
  
    return arr.length - firstElement
  }
  
  function getFirst(arr) {
      const left = 0, right = arr.length - 1
    if (right >= left) {
      let middle = left + Math.floor((right - left) / 2)
      if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0) {
        return middle;
      } else if (arr[middle] === 1) {
        return getFirst(arr, middle + 1, right)
      }
      return getFirst(arr, left, middle - 1)
    }
    return -1;
  }


module.exports = countZeroes