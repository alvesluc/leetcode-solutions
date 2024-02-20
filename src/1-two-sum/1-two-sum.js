/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumHashMap(nums, target) {
  /** @type {Map<number, number>} */
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (!numsMap.has(complement)) {
      numsMap.set(nums[i], i);
      continue;
    }

    return [numsMap.get(complement), i];
  }

  return [];
}

export { twoSum, twoSumHashMap };