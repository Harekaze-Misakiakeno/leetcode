// 给定两个数组，编写一个函数来计算它们的交集。

//  

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
//  

// 说明：

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * sort默认排序为字符编码排序
 */
var intersection = function(nums1, nums2) {
  nums1 = Array.from(new Set(nums1)).sort((a, b) => {return a - b})
  nums2 = Array.from(new Set(nums2)).sort((a, b) => {return a - b})
  console.log(nums1)
  console.log(nums2)
  let n1_len = nums1.length, n2_len = nums2.length;
  let i = 0, j = 0;
  let result = []
  while(i < n1_len && j < n2_len){
    if(nums1[i] === nums2[j]){
      result.push(nums1[i])
      i++;
      j++;
    }else if(nums1[i] < nums2[j]){
      i++;
    }else{
      j++;
    }
  }
  return result
};


// let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
let nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
let nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]
console.log(intersection(nums1, nums2))