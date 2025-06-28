package main

import (
	"fmt"
)

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	if x < 10 {
		return true
	}

	divisor := 1
	for x/divisor >= 10 {
		divisor *= 10
	} // หาหลักที่มากที่สุดในรูป 10^n

	for x > 0 {
		firstDigit := x / divisor
		lastDigit := x % 10

		if firstDigit != lastDigit {
			return false
		}

		x = (x % divisor) / 10 // ตัดหัวกับท้าย
		divisor /= 100         // เอาออก 2 หลัก
	}

	return true
}

func main() {
	x := 121
	x = 2342432
	x = 432423
	x = 10

	fmt.Println(isPalindrome(x))

}
