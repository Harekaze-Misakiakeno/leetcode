// 回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。

// 给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。

//  

// 示例 1：

// 输入：[[1,1],[2,3],[3,2]]
// 输出：true
// 示例 2：

// 输入：[[1,1],[2,2],[3,3]]
// 输出：false
//  

// 提示：

// points.length == 3
// points[i].length == 2
// 0 <= points[i][j] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-boomerang
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} points
 * @return {boolean}
 * 
 * 思路一：算两边的比值，不同则可行
 * 但会有精度问题，不过题目中的数不大，所以应该没问题
 * 
 * 两点相同需要额外考虑 除数为0时也要额外考虑
 * 
 */
var isBoomerang = function(points) {
  if((points[0][0] === points[1][0] && points[0][1] === points[1][1]) ||
  (points[0][0] === points[2][0] && points[0][1] === points[2][1]) ||
  (points[1][0] === points[2][0] && points[1][1] === points[2][1]) ||
  (points[0][1] === points[1][1] && points[1][1] === points[2][1])){
    return false;
  }else if((points[1][0] - points[0][0])/(points[1][1] - points[0][1]) !==
  (points[2][0] - points[1][0])/(points[2][1] - points[1][1])){
    return true;
  }
  return false;
};

// console.log(isBoomerang([[0,0],[1,1],[1,1]]))
console.log(isBoomerang([[1,0],[0,0],[2,0]]))