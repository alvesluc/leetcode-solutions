# Two Sum

## Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Follow-up

Can you come up with an algorithm that is less than `O(n2)` time complexity?

## Intuition

The goal is to find two numbers in the `nums` array that add up to the `target`. So I thought of using HashMap to store each number in the array along with its `index`. Then, it iterates through the array once, checking if the difference between the `target` and the current number (`target - nums[i]`) exists in the HashMap. If it does, it means that the pair of numbers that sum up to the `target` has been found.

## Approach

1. Create a HashMap to store each number in the `nums` array along with its `index`.
2. Iterate through the `nums` array.
3. For each element `nums[i]`, calculate the number needed to reach the target, i.e., `target - nums[i]`.
4. Check if this calculated number exists in the HashMap.
5. If it does, return an array containing the indices of the current element `i` and the `index` of the number found in the HashMap.
6. If not, add the current element and its `index` to the HashMap.
7. If no such pair is found after iterating through the entire array, return an empty array.

## Complexity

Time complexity:
`O(n)`, where n is the number of elements in the `nums` array. This is because, in the worst case, we iterate through the entire array once to find the pair that sums up to the `target`.

Space complexity:
`O(n)`, because we use a HashMap to store the elements of the array along with their indices. In the worst case, the HashMap can contain all elements of the `nums` array.
