#include <vector>
#include <iostream>

void merge(std::vector<int> &nums1, int m, std::vector<int> &nums2, int n)
{
    int i = m - 1;     // Last index of the initialized part of nums1
    int j = n - 1;     // Last index of nums2
    int k = m + n - 1; // Last index of nums1 (including space for nums2)

    // Merge nums2 into nums1 from the end
    while (i >= 0 && j >= 0)
    {
        if (nums1[i] > nums2[j])
        {
            nums1[k] = nums1[i];
            i--;
        }
        else
        {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Copy remaining elements of nums2 (if any)
    while (j >= 0)
    {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    // nums1 is now fully merged
}

// Example usage
int main()
{
    std::vector<int> nums1 = {1, 2, 3, 0, 0, 0};
    int m = 3;
    std::vector<int> nums2 = {2, 5, 6};
    int n = 3;

    merge(nums1, m, nums2, n);

    // Print the merged array
    for (int num : nums1)
    {
        std::cout << num << " ";
    }
    return 0;
}
