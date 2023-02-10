
//  case01
// A valid IP address consists of exactly four integers separated by single dots. Each integer is
// between 0 and 255 (inclusive) and cannot have leading zeros.
// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245",
// "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed
// by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may
// return the valid IP addresses in any order.

var ip = "2552551113";

var ipProblem = function(s) {
    var res = [];
    helper(s, 0, [], res);
    return res;
  };
  
  var helper = function (s, start, now, res) {
    var str = '';
    var num = 0;
  
    if (now.length === 4) {
      if (start === s.length) res.push(now.join('.'));
      return;
    }
  
    for (var i = 1; i <= 3; i++) {
      str = s.substr(start, i);
      if (str.length === 1 || str[0] !== '0') {
        num = Number(str);
        if (0 <= num && num <= 255) {
          now.push(num);
          helper(s, start + i, now, res);
          now.pop();
        }
      }
    }
  };

console.log(ipProblem(ip));

// case02

// const nums = [6,5,-1,6,-4,5]
// let targetValue=5

// function case02(nums, target)
// {
//     nums.sort();
//     var result = nums[0] + nums[1] + nums[2];
//     let i = 0;
//     while (i < nums.length - 1) {
//         var nxt = i + 1;
//         var end = nums.length - 1;
//         while (nxt < end) {
//             var sum = nums[i] + nums[nxt] + nums[end];
//             if (target === sum) {
//                 return sum;
//             }
//             if(Math.abs(sum-target) < Math.abs(result - target)){
//                 result = sum;
//             }
//             if(sum > target)
//                 end -= 1;
//             else
//                 nxt += 1;
//         }
//         i++;
//     }
//     return result;
//     }

 

// console.log(case02(nums,targetValue))


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