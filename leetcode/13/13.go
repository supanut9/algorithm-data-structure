package main

import "fmt"

/*
	Symbol       Value
	I             1
	V             5
	X             10
	L             50
	C             100
	D             500
	M             1000
*/

func romanToInt(s string) int {
	result := 0
	conversion := map[string]int{
		"I":  1,
		"V":  5,
		"X":  10,
		"L":  50,
		"C":  100,
		"D":  500,
		"M":  1000,
		"IV": 4,
		"IX": 9,
		"XL": 40,
		"XC": 90,
		"CD": 400,
		"CM": 900,
	}

	i := 0

	for i < len(s)-1 {
		first := conversion[string(s[i])]
		second := conversion[string(s[i+1])]

		if first >= second {
			fmt.Println(string(s[i]))
			result += first
			i++
		} else {
			fmt.Println(string(s[i]), string(s[i+1]))
			result += conversion[string(s[i])+string(s[i+1])]
			i += 2
		}
	}

	if i == len(s)-1 {
		result += conversion[string(s[i])]
	}

	return result
}

/*
	conditions
	1) i > i+1 --> บวก i เข้าเลย ( i++ )
	2) i === i+1 --> บวก i เข้าเลย ( i++ )
	3) i < i+1 --> บวก i ผสม i+1 เข้า ตามเงื่อนไข ( i += 2)
		I can be placed before V (5) and X (10) to make 4 and 9.
		X can be placed before L (50) and C (100) to make 40 and 90.
		C can be placed before D (500) and M (1000) to make 400 and 900.
	4) ออก loop เมื่อ i < length

*/

/*
	Why the Performance is Slow

	String Conversion: In Go, converting a byte from a string slice like s[i] into a string (e.g., string(s[i])) requires allocating new memory for that new string. You are doing this at least twice on every single iteration of your loop.

	String Concatenation: The line string(s[i])+string(s[i+1]) is even more expensive. It creates another new string in memory by combining the first two.

	Multiple Map Lookups: While map lookups are fast, performing several of them per iteration, using keys that you just allocated memory for, adds to the overhead.

	For a long Roman numeral string, creating all these temporary strings becomes a major performance bottleneck.

	A More Performant and Simpler Approach
	A much faster and simpler way to solve this is to iterate through the string from right to left. This approach completely avoids the need to check pairs of characters.

	The Logic:
	When moving from right to left:

	If the current numeral's value is greater than or equal to the value of the numeral to its right, you add its value to the total.

	If the current numeral's value is less than the one to its right, you subtract its value.

	Example: "MCMXCIV"

	Start at V (5). Add 5. result = 5.

	Move to I (1). 1 < 5, so subtract 1. result = 4.

	Move to C (100). 100 > 1, so add 100. result = 104.

	Move to X (10). 10 < 100, so subtract 10. result = 94.

	And so on...

*/

// Optimized version
func romanToIntOptimized(s string) int {
	// Only need single character values
	conversion := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	result := 0
	lastValue := 0

	// Iterate from RIGHT to LEFT
	for i := len(s) - 1; i >= 0; i-- {
		// Get the value of the current Roman numeral
		currentValue := conversion[s[i]]

		// Compare with the value of the numeral to its right
		if currentValue < lastValue {
			result -= currentValue
		} else {
			result += currentValue
		}

		// Update the last value for the next iteration
		lastValue = currentValue
	}

	return result
}

func main() {
	s := "III"
	fmt.Printf("'%s' -> %d\n", s, romanToIntOptimized(s))

	s = "LVIII"
	fmt.Printf("'%s' -> %d\n", s, romanToIntOptimized(s))

	s = "MCMXCIV"
	fmt.Printf("'%s' -> %d\n", s, romanToIntOptimized(s))
}
