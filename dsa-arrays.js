const Array = require("./array");

const dsaArrays = {
  main() {
    Array.SIZE_RATIO = 3;
  
    // Create an instance of the Array class
    let arr = new Array();
  
    console.log(arr);
    // Add an item to the array
    arr.push(3);
  
    console.log(arr);

    // Add more items to the array
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    /*
    When arr is created it has length, _capacity, and ptr of "0"
    When the first push happens it allocates additional space (as it is using none)
    It's new length is 1, so it allocates 3 blocks that point to 0
    When the second and third push happen, the only thing that changes is the length

    On the 4th push, it it's length equals it's current capacity so it runs allocate again
    It allocates the current length (4) times the SIZE_RATIO (3) allocating the next 12 contiguous blocks
    This moves the pointer to 3
    */
    console.log(arr);

    // Remove items from the array
    arr.pop();
    arr.pop();
    arr.pop();

    /*
    As these items are removed, the only thing that changes is the length of the array
    12 blocks are still allocated for the array and the start at the 3rd block
    */
    console.log(arr);

    // Print the first item in the array
    console.log(arr.get(0));

    // Remove all items from the array
    let arrayLength = arr.length
    for (let i = 0; i < arrayLength; i++) {
      arr.pop();
    }
 
    // Add item to array
    arr.push("tauhida")

    // (try to) print tauhida
    // the array only accepts floats
    console.log(arr.get(0))

  },
  urlifyString(string) {
    return string.replace(/\s/, "%20")
  },
  lessThanFive(array) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 5) {
        newArray.push(array[i])
      }
    }
    return newArray
  },
  maxSum(array) {
    if (array.length === 1) {
      return array[0]
    }
    const head = array.slice(1)
    const tail = array.slice(0, -1)
    let greater = head
    if (tail > head) {
      greater = tail
    }
    return greater
  },
  mergeArrays(arr1, arr2) {
    if (arr1.length === 0) { 
      return arr2
    } else if (arr2.length === 0) {
      return arr1
    }
    let greater
    const arr1Copy = arr1.slice()
    const arr2Copy = arr2.slice()
    if (arr1Copy[arr1Copy.lenght - 1] >= arr2Copy[arr2Copy.length - 1]) {
      greater = arr1Copy.pop()
    } else {
      greater = arr2Copy.pop()
    }
    return [...this.mergeArrays(arr1Copy, arr2Copy), greater]
  },
  removeCharacters(stringToFilter, filters) {
    let filteredString = ""
    for (let i = 0; i < stringToFilter.length; i++) {
      if (!filters.includes(stringToFilter[i])) {
        filteredString += stringToFilter[i]
      }
    }
    return filteredString
  },
  products(arr) {
    let total = 0
    for (const num of arr.values()) {
      total += num
    }
    let newArr = []
    for (const num of arr.values()) {
      newArr.push(total - num)
    }
    return newArr
  }
} 

module.exports = dsaArrays;
