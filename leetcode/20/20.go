package main

import (
	"fmt"
	"strings"
)

func isValid(s string) bool {
	open := []string{}

	for i := 0; i < len(s); i++ {
		value := string(s[i])
		if strings.Contains("([{", value) {
			open = append(open, value)
			continue
		}

		if len(open) == 0 {
			return false
		}

		if (value == ")" && open[len(open)-1] != "(") ||
			(value == "]" && open[len(open)-1] != "[") ||
			(value == "}" && open[len(open)-1] != "{") {
			return false
		}

		open = open[:len(open)-1]
	}

	return len(open) == 0
}

/*
	Why the Current Code is Slow

	The main performance issue is the line value := string(s[i]).

	In Go, strings are immutable. Every time you execute string(s[i]), you are creating a new string and allocating new memory for it. Doing this on every single iteration of a loop is inefficient and puts pressure on the garbage collector.

	Additionally, your stack (open := []string{}) stores these newly created strings, which uses more memory than necessary.
*/

/*
	The Optimized Approach

	We can make this much faster by making two main changes:

	1) Work directly with bytes. The characters ()[]{} are all single-byte ASCII characters. We can iterate over the string's bytes and use a []byte for our stack, completely avoiding any new string allocations in the loop.

	2) Use a map for pairs. Instead of a chain of if statements, we can use a map to instantly find the matching opening bracket for any closing bracket. This makes the code cleaner and more efficient.
*/

func isValidOptimized(s string) bool {
	// If the string has an odd number of characters, it can't be valid.
	if len(s)%2 != 0 {
		return false
	}

	// Use a slice of bytes as a stack. No string allocations needed.
	stack := []byte{}

	// Map closing brackets to their opening counterparts.
	pairs := map[byte]byte{
		')': '(',
		']': '[',
		'}': '{',
	}

	// Iterate over the bytes of the string.
	for i := 0; i < len(s); i++ {
		char := s[i] // char is a byte

		// Check if the current character is a closing bracket.
		if matchingBracket, isCloser := pairs[char]; isCloser {
			// If it's a closing bracket, the stack can't be empty,
			// and the top of the stack must be the matching opening bracket.
			if len(stack) == 0 || stack[len(stack)-1] != matchingBracket {
				return false
			}
			// It's a match, so pop from the stack.
			stack = stack[:len(stack)-1]
		} else {
			// It's an opening bracket, so push it onto the stack.
			stack = append(stack, char)
		}
	}

	// If the stack is empty at the end, the string is valid.
	return len(stack) == 0
}

func main() {
	s := "()[]{}"
	fmt.Printf("Is '%s' valid? %t\n", s, isValidOptimized(s))

	s = "(]"
	fmt.Printf("Is '%s' valid? %t\n", s, isValidOptimized(s))

	s = "([)]"
	fmt.Printf("Is '%s' valid? %t\n", s, isValidOptimized(s))

	s = "([])"
	fmt.Printf("Is '%s' valid? %t\n", s, isValidOptimized(s))

	s = "("
	fmt.Printf("Is '%s' valid? %t\n", s, isValidOptimized(s))

	s = ")"
	fmt.Printf("Is '%s' valid? %t\n", s, isValidOptimized(s))
}
