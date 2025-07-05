/**
 * The core helper function. It takes a subtree rooted at index 'i'
 * and ensures it satisfies the Max-Heap property.
 * n is the size of the heap being considered.
 */
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as the root of the subtree
  const left = 2 * i + 1; // Left child index
  const right = 2 * i + 2; // Right child index

  // If the left child exists and is greater than the root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If the right child exists and is greater than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest element is not the root, swap them
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

    // After swapping, the subtree might be invalid, so recursively
    // heapify the affected subtree.
    heapify(arr, n, largest);
  }
}

/**
 * The main Heap Sort function.
 * It orchestrates the two main phases: building the heap and sorting the array.
 */
function heapSort(arr) {
  const n = arr.length;

  // --- Phase 1: Build the Max-Heap ---
  // Start from the last non-leaf node and heapify all nodes up to the root.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // --- Phase 2: Extract elements from the heap ---
  // The loop moves backwards from the end of the array.
  for (let i = n - 1; i > 0; i--) {
    // 1. Move the current root (the largest element) to the end.
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // 2. Call heapify on the reduced heap (size 'i') to fix the root.
    heapify(arr, i, 0);
  }

  return arr;
}

// --- Testing ---
const data = [12, 11, 13, 5, 6, 7];
console.log('Unsorted array:', data);

heapSort(data);

console.log('Sorted array:  ', data);
// Expected Output: [5, 6, 7, 11, 12, 13]
