function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = arr.slice(mid);

  return merge(left, right);
}

// Challenge merge sort with comparator function callback
function merge(arr1, arr2, comparator) {
  const defaultComparator = (a, b) => {
    return a - b;
  };

  comparator =
    typeof comparator !== 'function' ? defaultComparator : comparator;

  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) <= 0) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2));

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

console.log(merge(arr3, arr4));

var arr5 = [3, 4, 5];
var arr6 = [1, 2];

console.log(merge(arr5, arr6));

var names = ['Bob', 'Ethel', 'Christine'];
var otherNames = ['M', 'Colt', 'Allison', 'SuperLongNameOMG'];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

console.log(merge(names, otherNames, stringLengthComparator));

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), comparator);
  const right = mergeSort(arr.slice(mid), comparator);

  return merge(left, right, comparator);
}

console.log(mergeSort([4, 20, 12, 10, 7, 9]));
console.log(mergeSort([0, -10, 7, 4]));
console.log(mergeSort([1, 2, 3]));
console.log(mergeSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(mergeSort(nums));

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(mergeSort(kitties, strComp));

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

console.log(mergeSort(moarKittyData, oldestToYoungest));
