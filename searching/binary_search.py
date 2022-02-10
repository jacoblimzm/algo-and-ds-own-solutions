"""Binary Search"""
import math

# Write a function that accepts A SORTED ARRAY and value
# create a left pointer at the start of the array and a right pointer at the end of the arrat
# while the left pointer comes before the right pointer
### create a pointer in the middle
### if value is found, return the index
### if value is too small, move left pointer up
### if value is too large, move right pointer down
# if the value is never found, return -1


def binary_search(arr, value):
    """binary search function"""
    left = 0
    right = len(arr) - 1
    middle = math.floor((len(arr) - 1) / 2)

    while left < right: # code should run while left is less than right
        if arr[middle] == value:
            return middle
        if arr[middle] < value:
            # we add 1 to the index because the middle has already been tested and it should be excluded.
            # this will also help the loop to terminate when it gets to the ends of the array
            left = middle + 1
            middle = math.floor((len(arr) - 1 + left) / 2)
        elif arr[middle] > value:
            # see above
            right = middle - 1
            middle = math.floor(right / 2)


sorted_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


binary_search(sorted_array, 10)
