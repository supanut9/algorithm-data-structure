const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function pivot(arr, start = 0, end = arr.length) {
  let randomPivotIndex = Math.floor(Math.random() * (end - start) + start);
  swap(arr, start, randomPivotIndex);

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

const defaultComparator = (a, b) => {
  return a - b;
};

// Challenge quick sort with comparator function callback
function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  comparator =
    typeof comparator !== 'function' ? defaultComparator : comparator;

  let randomPivotIndex = Math.floor(Math.random() * (end - start) + start);
  swap(arr, start, randomPivotIndex);

  const pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (comparator(arr[i], pivot) < 0) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }

  swap(arr, start, pivotIdx);

  return pivotIdx;
}

function quickSort(arr, comparator, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIdx = pivot(arr, comparator, left, right);

    quickSort(arr, comparator, left, pivotIdx);
    quickSort(arr, comparator, pivotIdx + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 20, 12, 10, 7, 9]));
console.log(quickSort([0, -10, 7, 4]));
console.log(quickSort([1, 2, 3]));
console.log(quickSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(quickSort(nums));

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(quickSort(kitties, strComp));

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

console.log(quickSort(moarKittyData, oldestToYoungest));
