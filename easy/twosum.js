/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const res = {};

    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        if (target - el in res) {
            console.log([res[target - el], i]);
            return [res[target - el], i];
        }
        res[el] = i;
    }
};

let arr = [2,7,11,15];
let target = 9;

twoSum(arr, target);
