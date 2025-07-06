package main

import "fmt"

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	if len(strs) == 1 {
		return strs[0]
	}

	result := map[string]int{}

	for i := 0; i < len(strs[0]); i++ {
		result[strs[0][0:i+1]] = 0
	}

	for i := 0; i < len(strs); i++ {
		for j := 0; j < len(strs[i]); j++ {
			substring := strs[i][0 : j+1]

			_, exists := result[substring]
			if exists {
				result[substring] += 1

			}
		}
	}

	finalValue := ""

	for key, value := range result {
		if (len(key) > len(finalValue)) && value == len(strs) {
			finalValue = key
		}
	}

	return finalValue
}

/*
	Why the Current Code is Slow

	Excessive String Allocations: The biggest issue is creating new strings on every loop iteration (substring := strs[i][0 : j+1]). In Go, every time you slice a string and assign it to a new variable, you allocate new memory. Doing this in a tight double loop is very inefficient.

	High Complexity: The complexity of your algorithm is roughly O(n * L²), where n is the number of strings and L is the length of the strings. It generates all prefixes for all strings, which is far more work than needed.

	High Memory Usage: The result map can grow very large, consuming a lot of memory to store all possible prefixes and their counts.
*/

/*
	Optimized Solution: Vertical Scanning

	A much faster and more memory-efficient approach is "Vertical Scanning." Instead of comparing prefixes, we compare the strings character by character at each position.

	The Logic:

	Loop through the characters of the first string (from index i = 0 onwards).

	For each character i, loop through all the other strings in the list.

	Check if the character strs[j][i] in the other strings is the same as strs[0][i].

	If you find any character that doesn't match, or if any string is shorter than the current index i, then you know the longest common prefix is the part you've checked so far (strs[0][:i]). You can return immediately.

	If the outer loop finishes without any mismatches, it means the entire first string is the common prefix.

	This method is highly efficient because it stops at the very first point of difference.
*/

func longestCommonPrefixOptimized(strs []string) string {
	// Handle edge case of an empty list
	if len(strs) == 0 {
		return ""
	}

	// Loop through the characters of the first string
	for i := 0; i < len(strs[0]); i++ {
		// Get the character we want to check
		charToMatch := strs[0][i]

		// Loop through all the other strings
		for j := 1; j < len(strs); j++ {
			// Check for two failure conditions:
			// 1. The current string is shorter than our character index 'i'.
			// 2. The character at 'i' does not match.
			if i >= len(strs[j]) || strs[j][i] != charToMatch {
				// If we find a mismatch, the prefix is the part of the
				// first string before the current character.
				return strs[0][:i]
			}
		}
	}

	// If the outer loop completes, the entire first string is the prefix.
	return strs[0]
}

func main() {

	strs := []string{"flower", "flow", "flight"}

	// strs = []string{"dog", "racecar", "car"}

	// strs = []string{"a"}

	// strs = []string{"reflower", "flow", "flight"}

	// strs = []string{"a", "b", "a"}

	fmt.Println(longestCommonPrefixOptimized(strs))
}
