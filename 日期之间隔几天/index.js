// 请你编写一个程序来计算两个日期之间隔了多少天。

// 日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。

//  

// 示例 1：

// 输入：date1 = "2019-06-29", date2 = "2019-06-30"
// 输出：1
// 示例 2：

// 输入：date1 = "2020-01-15", date2 = "2019-12-31"
// 输出：15
//  

// 提示：

// 给定的日期是 1971 年到 2100 年之间的有效日期。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-days-between-two-dates
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
// var daysBetweenDates = function(date1, date2) {

// };
Date.prototype.Format = function(fmt) 
{ //author: meizz 
  var o = { 
    "M+" : this.getMonth()+1,                 //月份 
    "d+" : this.getDate(),                    //日 
    "h+" : this.getHours(),                   //小时 
    "m+" : this.getMinutes(),                 //分 
    "s+" : this.getSeconds(),                 //秒 
    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
    "S"  : this.getMilliseconds()             //毫秒 
  }; 
  if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o) 
    if(new RegExp("("+ k +")").test(fmt)) 
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
  return fmt; 
}

var a = new Date()
console.log(a.Format('yyyy-MM-dd'))

console.log(new Date('2019-06-29'))
