/* 

    Similar to bubble sort, but instead of first placing large values into
    sorted position, it places small values into sorted position
    
*/

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) swap(arr, i, lowest);
  }

  return arr;
}

// console.log(selectionSort([34, 22, 10, 19, 17]));

// Challenge selection sort with comparator function callback
function selectionSort(arr, comparator) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  const defaultComparator = (a, b) => {
    return a - b;
  };

  comparator =
    typeof comparator !== 'function' ? defaultComparator : comparator;

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[lowest]) < 0) {
        lowest = j;
      }
    }

    if (lowest !== i) swap(arr, lowest, i);
  }

  return arr;
}

console.log(selectionSort([4, 20, 12, 10, 7, 9]));
console.log(selectionSort([0, -10, 7, 4]));
console.log(selectionSort([1, 2, 3]));
console.log(selectionSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(selectionSort(nums));

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(selectionSort(kitties, strComp));

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

console.log(selectionSort(moarKittyData, oldestToYoungest));

/*
For all practical purposes on modern hardware, bubble sort and selection sort algorithms are too slow for general use on large datasets. They are primarily educational.

However, in a direct comparison:

Selection Sort is generally preferred over Bubble Sort because it performs significantly fewer swaps.

Bubble Sort has a niche advantage if you know your data is already mostly sorted.
*/
