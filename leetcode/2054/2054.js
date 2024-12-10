/**
 * @param {number[][]} events
 * @return {number}
 */

/*
   time complexity is O(nlogn)
*/


var maxTwoEvents = function (events) {
  // Sort events by their ending times
  events.sort((a, b) => a[1] - b[1]);

  // Maximum value of a single event seen so far
  let maxSingleEvent = 0;
  // Store maximum values of non-overlapping events up to each event
  const maxValues = [];

  let result = 0;

  for (let i = 0; i < events.length; i++) {
    const [start, end, value] = events[i];

    // Find the latest event that ends before the current event starts
    let left = 0,
      right = maxValues.length - 1,
      best = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (maxValues[mid][0] < start) {
        best = mid; // This is a valid event
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // Calculate the maximum value by combining the current event with a non-overlapping event
    if (best !== -1) {
      result = Math.max(result, value + maxValues[best][1]);
    }

    // Update the maximum single event and add it to the list
    maxSingleEvent = Math.max(maxSingleEvent, value);
    result = Math.max(result, maxSingleEvent);

    maxValues.push([end, maxSingleEvent]);
  }

  return result;
};

let events = [
  [1, 3, 2],
  [4, 5, 2],
  [2, 4, 3],
];

events = [
  [1, 3, 2],
  [4, 5, 2],
  [1, 5, 5],
];

events = [
  [1, 5, 3],
  [1, 5, 1],
  [6, 6, 5],
];

const maxSum = maxTwoEvents(events);

console.log(maxSum);
