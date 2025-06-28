package main

import (
	"fmt"
)

func twoSum(nums []int, target int) []int {
	length := len(nums)

	for i := 0; i < length-1; i++ {
		for j := i + 1; j < length; j++ {
			if nums[i]+nums[j] == target {
				result := []int{i, j}
				return result
			}
		}
	}
	return nums
}

func twoSumOptimized(nums []int, target int) []int {
	// Create a map to store numbers we've seen and their indices.
	// Key: number, Value: index
	numMap := make(map[int]int)

	// Iterate through the array just once.
	for index, num := range nums {
		// Calculate the complement we need to find.
		complement := target - num

		// Check if the complement exists in our map.
		// 'ok' will be true if the key (complement) is in the map.
		if complementIndex, ok := numMap[complement]; ok {
			// If it exists, we've found our solution.
			return []int{complementIndex, index}
		}

		// If the complement is not found, add the current number
		// and its index to the map for future lookups.
		numMap[num] = index
	}

	// If no solution is found after checking all numbers, return nil.
	return nil
}

func main() {
	nums, target := []int{2, 7, 11, 15}, 9
	nums, target = []int{3, 2, 4}, 6
	nums, target = []int{3, 3}, 6

	result := twoSumOptimized(nums, target)

	fmt.Println(result)

}
