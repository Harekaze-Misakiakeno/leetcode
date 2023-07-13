// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 示例 1：

// 输入：n = 2
// 输出：2
// 示例 2：

// 输入：n = 7
// 输出：21
// 示例 3：

// 输入：n = 0
// 输出：1
// 提示：

// 0 <= n <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/climbing-stairs
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number} n
 * @return {number}
 * 由于每次都是跳跃都是1个台阶或是2个台阶
 * 思路：每个 f(n) = f(n-1) + f(n-2)
 * f(0) = 1
 * f(1) = 1
 * 
 * 结果 超时
 * 思路应该没错
 */
// var numWays = function(n) {
//   let recursive = x =>{
//     if(x === 1 || x === 0) {
//       return 1
//     }
//     let sum = recursive(x-1)
//     sum += recursive(x-2)
//     return sum
//   }
//   return recursive(n)
// };




// var numWays = function(n) {
//   let a = 1, b = 1, sum;
//   for(let i = 0; i < n; i++){
//     sum = (a + b) % 1000000007;
//     a = b;
//     b = sum;
//   }
//   return a;
// };