// 给你两个整数数组 nums 和 index。你需要按照以下规则创建目标数组：

// 目标数组 target 最初为空。
// 按从左到右的顺序依次读取 nums[i] 和 index[i]，在 target 数组中的下标 index[i] 处插入值 nums[i] 。
// 重复上一步，直到在 nums 和 index 中都没有要读取的元素。
// 请你返回目标数组。

// 题目保证数字插入位置总是存在。

//  

// 示例 1：

// 输入：nums = [0,1,2,3,4], index = [0,1,2,2,1]
// 输出：[0,4,1,3,2]
// 解释：
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]
// 示例 2：

// 输入：nums = [1,2,3,4,0], index = [0,1,2,3,0]
// 输出：[0,1,2,3,4]
// 解释：
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]
// 示例 3：

// 输入：nums = [1], index = [0]
// 输出：[1]
//  

// 提示：

// 1 <= nums.length, index.length <= 100
// nums.length == index.length
// 0 <= nums[i] <= 100
// 0 <= index[i] <= i

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/create-target-array-in-the-given-order
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

/**
 * 思路一
 * 直接插入
 * 后面的数组依次往后移
 * 空间复杂度较小
 * 时间复杂度大
 */
// var createTargetArray = function(nums, index) {
//   var target = [];
//   for(let i in index){
//     for(let k = target.length ; k >= index[i] ; k--){
//       target[k] = target[k - 1];
//     }
//     target[index[i]] = nums[i];
//     // console.log(target);
//   }
//   return target;
// };


/**
 * 思路二
 * 由于越后面的插入，会使前面插入的向后移动
 * index从后往前遍历，比起序号大与等于的序号都加一
 */
var createTargetArray = function(nums, index) {
  for(let i = index.length - 1; i >= 0 ; i--){
    for(let k = i - 1; k >= 0 ; k--){
      if( index[k] >= index[i]){
        index[k] ++;
      }
    }
  }
  var target = [];
  for(let i in index){
    target[index[i]] = nums[i];
  }
  return target;
};


// console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]))
console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]))