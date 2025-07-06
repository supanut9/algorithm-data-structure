package main

import (
	"fmt"
	"strings"
)

// ListNode struct definition
type ListNode struct {
	Val  int
	Next *ListNode
}

// ----------------------------------------------------------------
// YOUR FUNCTION GOES HERE
// ----------------------------------------------------------------
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	dummy := &ListNode{}
	current := dummy

	for list1 != nil && list2 != nil {
		fmt.Println(list1.Val, list2.Val)
		if list1.Val <= list2.Val {
			current.Next = &ListNode{Val: list1.Val}
			current = current.Next

			list1 = list1.Next
		} else {
			current.Next = &ListNode{Val: list2.Val}
			current = current.Next

			list2 = list2.Next
		}
	}

	for list1 != nil {
		current.Next = &ListNode{Val: list1.Val}
		current = current.Next

		list1 = list1.Next
	}

	for list2 != nil {
		current.Next = &ListNode{Val: list2.Val}
		current = current.Next

		list2 = list2.Next
	}

	return dummy.Next
}

/*
	The Optimized Approach

	Instead of creating a new Node with the value, you simply point your current.Next to whichever node is smaller (list1 or list2), and then advance that list's pointer.
*/

func mergeTwoListsOptimized(list1 *ListNode, list2 *ListNode) *ListNode {
	// A dummy node to simplify the code. The merged list starts at dummy.Next.
	dummy := &ListNode{}
	// 'current' will be the tail of our new merged list.
	current := dummy

	// Loop as long as both lists have nodes
	for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			// Re-wire the 'Next' pointer to the smaller node
			current.Next = list1
			// Advance the pointer of the list we took from
			list1 = list1.Next
		} else {
			current.Next = list2
			list2 = list2.Next
		}
		// Advance the tail of our merged list
		current = current.Next
	}

	// At this point, one of the lists is empty. The other list
	// contains nodes that are all greater than what's in our merged list.
	// We can simply append the remainder of the non-empty list.
	if list1 != nil {
		current.Next = list1
	} else {
		current.Next = list2
	}

	return dummy.Next
}

// ----------------------------------------------------------------
// HELPER FUNCTIONS TO MAKE TESTING EASIER
// ----------------------------------------------------------------

// createLinkedList builds a linked list from a slice of integers.
func createLinkedList(vals []int) *ListNode {
	if len(vals) == 0 {
		return nil
	}
	dummy := &ListNode{}
	current := dummy
	for _, val := range vals {
		current.Next = &ListNode{Val: val}
		current = current.Next
	}
	return dummy.Next
}

// printLinkedList displays a linked list in a readable format.

func printLinkedList(head *ListNode) string {
	if head == nil {
		return "[]"
	}
	var sb strings.Builder
	sb.WriteString("[")
	current := head
	for current != nil {
		sb.WriteString(fmt.Sprintf("%d", current.Val))
		if current.Next != nil {
			sb.WriteString(" -> ")
		}
		current = current.Next
	}
	sb.WriteString("]")
	return sb.String()
}

// ----------------------------------------------------------------
// MAIN FUNCTION WITH TEST CASES
// ----------------------------------------------------------------
func main() {
	// --- Test Case 1: Standard interleaved lists ---
	fmt.Println("--- Test Case 1 ---")
	list1 := createLinkedList([]int{1, 2, 4})
	list2 := createLinkedList([]int{1, 3, 4})
	fmt.Printf("Input 1: %s\n", printLinkedList(list1))
	fmt.Printf("Input 2: %s\n", printLinkedList(list2))
	mergedList1 := mergeTwoListsOptimized(list1, list2)
	fmt.Printf("Merged:  %s\n\n", printLinkedList(mergedList1))

	// --- Test Case 2: One list is empty ---
	fmt.Println("--- Test Case 2 ---")
	list3 := createLinkedList([]int{})
	list4 := createLinkedList([]int{0})
	fmt.Printf("Input 1: %s\n", printLinkedList(list3))
	fmt.Printf("Input 2: %s\n", printLinkedList(list4))
	mergedList2 := mergeTwoListsOptimized(list3, list4)
	fmt.Printf("Merged:  %s\n\n", printLinkedList(mergedList2))

	// --- Test Case 3: Both lists are empty ---
	fmt.Println("--- Test Case 3 ---")
	list5 := createLinkedList([]int{})
	list6 := createLinkedList([]int{})
	fmt.Printf("Input 1: %s\n", printLinkedList(list5))
	fmt.Printf("Input 2: %s\n", printLinkedList(list6))
	mergedList3 := mergeTwoListsOptimized(list5, list6)
	fmt.Printf("Merged:  %s\n\n", printLinkedList(mergedList3))

	// --- Test Case 4: Lists with different lengths ---
	fmt.Println("--- Test Case 4 ---")
	list7 := createLinkedList([]int{1, 2})
	list8 := createLinkedList([]int{3, 4, 5, 6})
	fmt.Printf("Input 1: %s\n", printLinkedList(list7))
	fmt.Printf("Input 2: %s\n", printLinkedList(list8))
	mergedList4 := mergeTwoListsOptimized(list7, list8)
	fmt.Printf("Merged:  %s\n\n", printLinkedList(mergedList4))

}
