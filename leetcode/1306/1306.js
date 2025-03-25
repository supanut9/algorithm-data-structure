/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// DFS with recursive function
var canReach = function (arr, start) {
  const visited = new Array(arr.length).fill(false); // Keep track of visited indices

  const dfs = (index) => {
    // Base case: Out of bounds
    if (index < 0 || index >= arr.length) {
      return false;
    }

    // Base case: Already visited
    if (visited[index]) {
      return false;
    }

    // Base case: Found 0
    if (arr[index] === 0) {
      return true;
    }

    // Mark this index as visited
    visited[index] = true;

    // Recursive case: Try left and right jumps
    return dfs(index - arr[index]) || dfs(index + arr[index]);
  };

  return dfs(start);
};

// DFS without recursive function
var canReach = function (arr, start) {
  const n = arr.length;
  const visited = new Array(n).fill(false); // Track visited indices
  const stack = [start]; // Initialize stack with the starting index

  while (stack.length > 0) {
    const current = stack.pop(); // Pop the last index (LIFO behavior)

    // Base case: Found a value of 0
    if (arr[current] === 0) {
      return true;
    }

    // Mark the current index as visited
    visited[current] = true;

    // Calculate next positions
    const nextLeft = current - arr[current];
    const nextRight = current + arr[current];

    // Push valid and unvisited indices onto the stack
    if (nextLeft >= 0 && !visited[nextLeft]) {
      stack.push(nextLeft);
    }

    if (nextRight < n && !visited[nextRight]) {
      stack.push(nextRight);
    }
  }

  // If we exhaust the stack without finding a value of 0
  return false;
};

// BFS with recursive function
var canReach = function (arr, start) {
  const n = arr.length;
  const visited = new Array(n).fill(false); // Track visited indices

  // Helper function for recursive BFS
  const bfs = (queue) => {
    // Base case: If the queue is empty, no more nodes to process
    if (queue.length === 0) {
      return false;
    }

    // Dequeue the first element
    const current = queue.shift();

    // Check if the value at the current index is 0
    if (arr[current] === 0) {
      return true;
    }

    // Mark the current index as visited
    visited[current] = true;

    // Calculate neighbors
    const nextLeft = current - arr[current];
    const nextRight = current + arr[current];

    // Enqueue valid and unvisited neighbors
    if (nextLeft >= 0 && !visited[nextLeft]) {
      queue.push(nextLeft);
    }
    if (nextRight < n && !visited[nextRight]) {
      queue.push(nextRight);
    }

    // Recursive call with the updated queue
    return bfs(queue);
  };

  // Start the BFS with the initial index in the queue
  return bfs([start]);
};

// BFS without recursive function
var canReach = function (arr, start) {
  const n = arr.length;
  const visited = new Array(n).fill(false); // To track visited indices
  const queue = [start]; // Initialize queue with the starting index

  while (queue.length > 0) {
    const current = queue.shift(); // Dequeue the front element

    // If the value at the current index is 0, we can reach the goal
    if (arr[current] === 0) {
      return true;
    }

    // Mark the current index as visited
    visited[current] = true;

    // Calculate the next indices to visit
    const nextLeft = current - arr[current];
    const nextRight = current + arr[current];

    // Enqueue the valid and unvisited indices
    if (nextLeft >= 0 && !visited[nextLeft]) {
      queue.push(nextLeft);
    }
    if (nextRight < n && !visited[nextRight]) {
      queue.push(nextRight);
    }
  }

  // If we exhaust the queue without finding a value of 0
  return false;
};

(arr = [4, 2, 3, 0, 3, 1, 2]), (start = 5);

(arr = [4, 2, 3, 0, 3, 1, 2]), (start = 0);

console.log(canReach(arr, start));
