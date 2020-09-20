// 编写函数，实现许多图片编辑软件都支持的「颜色填充」功能。

// 待填充的图像用二维数组 image 表示，元素为初始颜色值。初始坐标点的横坐标为 sr 纵坐标为 sc。需要填充的新颜色为 newColor 。

// 「周围区域」是指颜色相同且在上、下、左、右四个方向上存在相连情况的若干元素。

// 请用新颜色填充初始坐标点的周围区域，并返回填充后的图像。

//  

// 示例：

// 输入：
// image = [[1,1,1],[1,1,0],[1,0,1]] 
// 注：这里的image为纵向填充 

// image[0][0] image[1][0]
// image[0][1] image[1][1]
// image[0][2] image[1][2] image[i][j]

// sr = 1, sc = 1, newColor = 2
// 输出：[[2,2,2],[2,2,0],[2,0,1]]
// 解释: 
// 初始坐标点位于图像的正中间，坐标 (sr,sc)=(1,1) 。
// 初始坐标点周围区域上所有符合条件的像素点的颜色都被更改成 2 。
// 注意，右下角的像素没有更改为 2 ，因为它不属于初始坐标点的周围区域。
//  

// 提示：

// image 和 image[0] 的长度均在范围 [1, 50] 内。
// 初始坐标点 (sr,sc) 满足 0 <= sr < image.length 和 0 <= sc < image[0].length 。
// image[i][j] 和 newColor 表示的颜色值在范围 [0, 65535] 内。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/color-fill-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} image
 * @param {number} sr 横向
 * @param {number} sc 纵向
 * @param {number} newColor
 * @return {number[][]}
 * 
 * 思路一：递归
 */
var floodFill = function(image, sr, sc, newColor) {
  let x = image[sr][sc]
  if(x === newColor){
    return image
  }
  let flood = function(sr, sc){
    image[sr][sc] = newColor
    if(sr - 1 >= 0 && image[sr - 1][sc] === x){
      flood(sr - 1, sc)
    }
    if(sc - 1 >= 0 && image[sr][sc - 1] === x){
      flood(sr, sc - 1)
    }
    if(sr + 1 < image.length && image[sr + 1][sc] === x){
      flood(sr + 1, sc)
    }
    if(sc + 1 < image[0].length && image[sr][sc + 1] === x){
      flood(sr, sc + 1)
    }
  }
  flood(sr, sc)
  return image
};

// var res_image = floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2)
var res_image = floodFill(image = [[0,0,0],[1,0,0]], sr = 1, sc = 0, newColor = 2)

for(let i = 0; i < res_image[0].length; i++){
  let str = ""
  for(let j = 0; j < res_image.length; j++){
    str += image[j][i] + " "
  }
  console.log(str)
}
