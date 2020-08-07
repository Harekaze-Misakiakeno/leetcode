// 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。

// 我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

//  

// 示例 1：

// 输入：
// nums = [1, 7, 3, 6, 5, 6]
// 输出：3
// 解释：
// 索引 3 (nums[3] = 6) 的左侧数之和 (1 + 7 + 3 = 11)，与右侧数之和 (5 + 6 = 11) 相等。
// 同时, 3 也是第一个符合要求的中心索引。
// 示例 2：

// 输入：
// nums = [1, 2, 3]
// 输出：-1
// 解释：
// 数组中不存在满足此条件的中心索引。
//  

// 说明：

// nums 的长度范围为 [0, 10000]。
// 任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-pivot-index
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 思路一
 * 两个变量存储累加和，一个数组首开始、一个从尾开始
 * 总值为正
 * 每次较小的和的方向才累加
 * 总值为负则相反
 * 不行
 * 遇到中间有零时回非常麻烦
 */
// var pivotIndex = function(nums) {
//   let fontIndex = -1;
//   let behindIndex = nums.length;
//   let font = 0;
//   let behind = 0;

//   while (font == behind && (fontIndex + 2 < behindIndex)) {
//     behindIndex -= 1;
//     behind += nums[behindIndex];
//   }
//   var sum = 0;
//   for(let i = 0, len = nums.length; i < len; i++){
//     sum += nums[i];
//   }
//   if (sum >= 0){
//     for(let i = 0;
//     i < nums.length && (font !== behind || (fontIndex + 2 !== behindIndex));
//     i++){
//       if(behind + nums[behindIndex - 1] === font){
//         behindIndex -= 1;
//         behind += nums[behindIndex];
//         continue;
//       }
//       if(font + nums[fontIndex + 1] === font){
//         fontIndex += 1;
//         font += nums[fontIndex];
//         continue;
//       }
      

//       if (font <= behind) {
//         fontIndex += 1;
//         font += nums[fontIndex];
//       }else{
//         behindIndex -= 1;
//         behind += nums[behindIndex];
//       }
//     }
//   }else{
//     for(let i = 0;
//     i < nums.length && (font !== behind || (fontIndex + 2 !== behindIndex));
//     i++){
//       if(behind + nums[behindIndex - 1] === font){
//         behindIndex -= 1;
//         behind += nums[behindIndex];
//         continue;
//       }
//       if(font + nums[fontIndex + 1] === font){
//         fontIndex += 1;
//         font += nums[fontIndex];
//         continue;
//       }
      

//       if (font > behind) {
//         fontIndex += 1;
//         font += nums[fontIndex];
//       }else{
//         behindIndex -= 1;
//         behind += nums[behindIndex];
//       }
//     }
//   }
//   // console.log(fontIndex)
//   // console.log(behindIndex)
//   if(fontIndex + 2 === behindIndex && font === behind) return fontIndex + 1;
//   return -1;

// };


/**
 * 思路二
 * 折半比较
 * 类似于折半查找
 * 不行
 * 答案在末尾时不行
 */
// var pivotIndex = function(nums) {
//   let len = nums.length
//   let mid = parseInt(len/2)
//   let fontMid = 0;
//   let behindMid = len;

//   var sum = 0;

//   let result = -1;
  
//   for(let i = 0; i < len; i++){
//     sum += nums[i];
//   }
//   if (sum >= 0){
//     for(let i = 0, len = nums.length; i < len; i++){
//       sum += nums[i];
//     }

//     for(let i = 0; i < len; i++){
//       let font = 0;
//       let behind = 0;
//       for (let k = 0; k < mid; k++){
//         font += nums[k]
//       }
//       for (let k = mid + 1; k < len; k++){
//         behind += nums[k]
//       }
//       if (behind === font){
//         while(nums[mid - 1] === 0  && nums[mid] === 0)
//           mid--;
//         result =  mid;
//         behindMid = mid;
//         mid = parseInt((font + mid) / 2);
//       }
//       if ((font < behind && nums[mid] >= 0) || (font > behind && nums[mid] < 0)){
//         fontMid = mid;
//         mid = parseInt((mid + behindMid) / 2);
//         console.log("font" + mid)
//       }else if ((font > behind && nums[mid] >= 0) || (font < behind && nums[mid] < 0)){
//         behindMid = mid;
//         mid = parseInt((font + mid) / 2);
//         console.log("behind" + mid)
//       }
//       console.log("-------------------")
//     }
//   }else{
//     for(let i = 0; i < len; i++){
      
//       let font = 0;
//       let behind = 0;
//       for (let k = 0; k < mid; k++){
//         font += nums[k]
//       }
//       for (let k = mid + 1; k < len; k++){
//         behind += nums[k]
//       }
//       if (behind === font){
//         while(nums[mid - 1] === 0  && nums[mid] === 0)
//           mid--;
//         result = mid;
//         behindMid = mid;
//         mid = parseInt((font + mid) / 2);
//       }
//       if ((font > behind && nums[mid] <= 0) || (font < behind && nums[mid] > 0)){
//         fontMid = mid;
//         mid = parseInt((mid + behindMid) / 2);
//       }else if ((font < behind && nums[mid] <= 0) || (font > behind && nums[mid] > 0)){
//         behindMid = mid;
//         mid = parseInt((font + mid) / 2);
//       }
//     }
//   }
//   return result;
// };

/**
 * 思路三
 * 从头遍历
 * 每次都累加对比前后的和
 */
// var pivotIndex = function(nums) {
//   let len = nums.length
//   let mid = 0;
//   for(let i = 0; i < len; i++){
//     let font = 0;
//     let behind = 0;
//     for (let k = 0; k < mid; k++){
//       font += nums[k];
//     }
//     for (let k = mid + 1; k < len; k++){
//       behind += nums[k];
//     }
//     if (font === behind){
//       return mid;
//     }
//     mid++;
//   }
//   return -1;
// };

/**
 * 思路四
 * 从头遍历
 * 在第一次求完总和后
 * 从头开始累加
 * 从头累加的值 对比 总和减去总头累加的值
 */
var pivotIndex = function(nums) {
  let len = nums.length
  let sum = 0;
  let fontSum = 0;
  for(let i = 0; i < len; i++){
    sum += nums[i]
  }
  // console.log(sum)
  for(let i = 0; i < len; i++){
    if(fontSum === sum - fontSum - nums[i]){
      return i;
    }
    fontSum += nums[i];
    // console.log(fontSum)
  }
  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]))