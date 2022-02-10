"""Linear Search"""

# Write a function that accepts an array and value
# loop through the array and check if the current array element is equal to the value
# if it is, return the index at which the element is found
# if the value is never found, return -1

j = [1, 2, 3]


def linear_search(arr, value):
    """linear search with traditional range(len()) method"""
    for i in range(len(arr)):
        if value == arr[i]:
            return i
    return -1


def linear_search_enumerate(arr, value):
    """linear search with enum"""
    # enumerate takes a collection and returns it as an iterable
    # similar to the Object.entries method of JavaScript
    for element in enumerate(arr):
        if value == element[1]:
            return element[0]
    return -2


sample_arr = ["a", "b", "c", "d", "e"]
print(linear_search(sample_arr, "cf"))
print(linear_search_enumerate(sample_arr, "sdf"))
