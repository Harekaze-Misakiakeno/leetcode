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

// /**
//  * @param {string} date1
//  * @param {string} date2
//  * @return {number}
//  */
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


/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 * 直接做，但写的真的有点垃圾
 */
// var daysBetweenDates = function(date1, date2) {
//   /**
//    * @param {string} year
//    * @return {boolean}
//    */
//   var isLeapYear = function(year){
//     year = parseInt(year)
//     if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//       return true;
//     }
//     return false;
//   }

//   if(date1 < date2){
//     var d = date1;
//     date1 = date2;
//     date2 = d;
//   }
//   let days = 0
//   let d1 = new Date(date1); //结束日
//   let d2 = new Date(date2); //开始日
//   let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   // 首先是年 不计算是否是闰年
//   if(d1.getFullYear() - d2.getFullYear() > 0){
//     days = 365 * (d1.getFullYear() - d2.getFullYear());
//   }
  
//   if(d1.getMonth() === 2 && d1.getDate() === 29){
//     days++;
//     d1.setDate(28);
//   }
//   if(d2.getMonth() === 2 && d2.getDate() === 29){
//     days--;
//     d2.setDate(28);
//   }

//   // if(d1.getFullYear() - d2.getFullYear() > 0){
//   if(d1.getMonth() > d2.getMonth()){
//     days += monthDay[d2.getMonth()] - d2.getDate()
//     days += d1.getDate()
//     for(let i = d2.getMonth() + 1; i < d1.getMonth(); i++){
//       days += monthDay[i];
//     }
//   }else if(d1.getMonth() === d2.getMonth()){
//     days += d1.getDate() - d2.getDate()
//   }else{
//     days -= monthDay[d1.getMonth()] - d1.getDate();
//     days -= d2.getDate()
//     for(let i = d1.getMonth() + 1; i < d2.getMonth(); i++){
//       days -= monthDay[i];
//     }
//   }
//   //  起始日闰年计算
//   if(d1.getFullYear() === d2.getFullYear()
//     && isLeapYear(d2.getFullYear())
//     && ((d2.getMonth() === 1 && d2.getDate() < 29) || d2.getMonth() === 0)
//     && d1.getMonth() >= 2){
//       days++;
//     }
//   if(d1.getFullYear() > d2.getFullYear()
//   && isLeapYear(d1.getFullYear())
//   && d1.getMonth() >= 2){
//     days++;
//   }
//   if(d1.getFullYear() > d2.getFullYear()
//     && isLeapYear(d2.getFullYear())
//     && ((d2.getMonth() === 1 && d2.getDate() < 29) || d2.getMonth() === 0)){
//     days++;
//   }
//   let opy = d2.getFullYear() + 1
//   let edy = d1.getFullYear()
//   while(opy < edy){
//     if(isLeapYear(opy)){
//       days++;
//     }
//     opy++;
//   }
//   return days;
//   // 31天，29天，31天，30天，31天，30天，31天，31天，30天，31天，30天，31天
// };

// var d1 = new Date("2020-01-15")
// var d2 = new Date("2019-12-31")
// if(d1 < d2){
//   console.log(d1.Format('yyyyMMdd'))
// }else{
//   console.log('NO')
// }


/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 * 
 * 思路二：官方解答
 * 
 * 由于题目中的日期不会早于 1971 年，我们可以将两个日期转化为距离 1971 年 1 月 1 日的天数。这一转化过程可以直接暴力求解：从当前日期开始，一天一天递减，直到 1971 年 1 月 1 日为止。
 * 
 */
var daysBetweenDates = function(date1, date2) {
  
};




console.log(daysBetweenDates("2020-01-15", "2019-12-31"))
console.log(daysBetweenDates("2019-06-29", "2019-06-30"))
console.log(daysBetweenDates("2009-08-18", "2080-08-08"))

