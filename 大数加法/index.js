// 实现一个大数加法：

// function add(a, b) {}

// 例：'123' + '4321' = '4444'

var big_add = function(number1, number2){
  if(number1.length < number2.length){
    let n = number1;
    number1 = number2;
    number2 = n;
  }
  number1 = number1.split("").reverse();
  number2 = number2.split("").reverse();
  let result = [];
  let add = 0
  for(let i = 0; i < number2.length; i++){
    let temp = parseInt(number1[i]) + parseInt(number2[i]) + add
    add = parseInt(temp/10)
    result.push(parseInt(temp%10))
  }
  for(let i = number2.length; i < number1.length; i++){
    let temp = parseInt(number1[i]) + add
    add = parseInt(temp/10)
    result.push(parseInt(temp%10))
    console.log(number1)

  }
  // console.log(number1 , number2)
  return result.reverse().join("")
}

// reverse()
// console.log(big_add("123", "789"))
console.log(big_add("99999999999", "1"))