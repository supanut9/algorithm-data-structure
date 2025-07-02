/* 

    Builds up the sort by gradually creating a 
    larger left half which is always sorted
    
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

// Challenge insertion sort with comparator function callback
function insertionSort(arr, comparator) {
  const defaultComparator = (a, b) => {
    return a - b;
  };

  comparator =
    typeof comparator !== 'function' ? defaultComparator : comparator;

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for (j; j >= 0 && comparator(currentVal, arr[j]) < 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([4, 20, 12, 10, 7, 9]));
console.log(insertionSort([0, -10, 7, 4]));
console.log(insertionSort([1, 2, 3]));
console.log(insertionSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(insertionSort(nums));

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(insertionSort(kitties, strComp));

var moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(insertionSort(moarKittyData, oldestToYoungest));

/*  
    O(n^2) but better than selection and bubble sort in term of real usecase
*/
