const nums = [6,5,-1,6,-4,5]
let targetValue=5

function case02(nums, target)
{
    nums.sort();
    var result = nums[0] + nums[1] + nums[2];
    let i = 0;
    while (i < nums.length - 1) {
        var nxt = i + 1;
        var end = nums.length - 1;
        while (nxt < end) {
            var sum = nums[i] + nums[nxt] + nums[end];
            if (target === sum) {
                return sum;
            }
            if(Math.abs(sum-target) < Math.abs(result - target)){
                result = sum;
            }
            if(sum > target)
                end -= 1;
            else
                nxt += 1;
        }
        i++;
    }
    return result;
    }

 

console.log(case02(nums,targetValue))


// case3
// Given an unsorted integer array nums, return the smallest missing positive integer.
// You must implement an algorithm that runs in O(n) time and uses constant extra space.
// var nums = [1, 2, 0];
// var nums2 = [3, 4, -1, 1];
//  var nums3 = [7,8,9,11,12]

// function case03(nums)
// {
//     nums.sort();
//     // return nums;
//     let ans = 1;
//     for(let i = 0; i < nums.length; i++)
//     {
//         if(nums[i] == ans)
//             ans++;
//     }
//     return ans;
// }
// console.log(case03(nums2));