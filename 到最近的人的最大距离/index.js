// 在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。

// 至少有一个空座位，且至少有一人坐在座位上。

// 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

// 返回他到离他最近的人的最大距离。

// 示例 1：

// 输入：[1,0,0,0,1,0,1]
// 输出：2
// 解释：
// 如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
// 如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
// 因此，他到离他最近的人的最大距离是 2 。 
// 示例 2：

// 输入：[1,0,0,0]
// 输出：3
// 解释：
// 如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。
// 这是可能的最大距离，所以答案是 3 。
//  

// 提示：

// 2 <= seats.length <= 20000
// seats 中只含有 0 和 1，至少有一个 0，且至少有一个 1。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximize-distance-to-closest-person
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} seats
 * @return {number}
 * 
 * 思路一：遍历数组，数最长连续0 / 2就是了（向上整取），除了头尾要单独判断
 */
// var maxDistToClosest = function(seats) {
//   let max_interval = 1;
//   let temporary_max_interval = 1;
//   let first = 0;
//   let end = seats.length - 1;
//   while(seats[first] === 0){
//     max_interval ++;
//     first ++;
//   }
//   while(seats[end] === 0){
//     temporary_max_interval ++;
//     if(temporary_max_interval > max_interval){
//       max_interval = temporary_max_interval;
//     }
//     end --;
//   }
//   if(max_interval !== 1){
//     max_interval --;
//   }
//   temporary_max_interval = 0
//   for(let i = first; i <= end; i++){
//     if(seats[i] === 0){
//       temporary_max_interval ++;
//     }
//     if(seats[i] === 1){
//       temporary_max_interval = 0;
//     }
//     if(temporary_max_interval > 2 && temporary_max_interval / 2 > max_interval){
//       if(parseInt(temporary_max_interval / 2) === temporary_max_interval / 2){
//         max_interval = parseInt(temporary_max_interval / 2);
//       }
//       max_interval = parseInt(temporary_max_interval / 2) + 1;
//     }
//   }
//   return max_interval;
// };

/**
 * 思路二：使用两个数组表示当前下标到左右人之间的距离
 * 
思路

令 left[i] 为座位 i 到坐在 i 左边的人的最近距离。同理 right[i] 为座位 i 到坐在 i 右边的人的最近距离。那么该座位到最近的人的距离为 min(left[i], right[i])。

算法

如果 i 左边的位置是空的，那么 left[i] = left[i - 1] + 1；否则 left[i] = 0。right[i] 的计算方法类似。

作者：LeetCode
链接：https://leetcode-cn.com/problems/maximize-distance-to-closest-person/solution/dao-zui-jin-de-ren-de-zui-da-ju-chi-by-leetcode/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

console.log(maxDistToClosest([1,0,0,0,1,0,1]))