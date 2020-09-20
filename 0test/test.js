// es5
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};
}


console.log(typeof(Point)) 
// function
console.log(Point === Point.prototype.constructor)
// true
console.log(Point(1, 2).toString())

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
//   this.eat = function(){
//     console.log("eat " + this.name)
//   }
// }

// var cheese = new Food('cheese', 5)
// cheese.eat()
// // expected output: "cheese"



// // const test_obj = {
// //   value: 10,
// //   func: function() {
// //     value = 1
// //     var a = function (){
// //       value = 2
// //       return this.value;
// //     }
// //     return a();
// //   },
// // };

// // console.log(test_obj.func());

// // var obj = {
// //   birth: 1900,
// //   getAge: function (callback) {
// //     birth = 1910
// //     var fn = function(callback){
// //       birth = 1920
// //       var fu1 = function(callback){
// //         birth = 1930
// //         return callback()
// //       }
// //       return fu1(callback)
// //     }
// //     return fn(callback)
// //   }
// // };
// // console.log(obj.getAge(function(){
// //   birth = 1940
// //   return 2020 - this.birth
// // }))


// // var obj = {
// //   birth: 1990,
// //   getAge: function () {
// //     var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
// //     return fn();
// //   }
// // };
// // console.log(obj.getAge())

// // var f1 = () => {
// //   return this
// // }
// // var f2 = function(){
// //   return this
// // }

// // console.log(f1())
// // console.log(f1() === this)
// // console.log(f2())
// // console.log(f2() === globalThis)

// // var name = function () {
// //   this.name = "Akeno";
// // }
// // var obj = new name();
// // console.log(obj.name);

// // var test_fun = function(){
// //   this.value = 100;
// //   return value
// // }
// // console.log(test_fun())
// // console.log(value)
// // console.log(this.value)

// // const test_obj = {
// //   value: 10,
// //   func: function(x) {
// //     value = 1
// //     var a = function (){
// //       this.value = 2
// //       return value;
// //     }
// //     x(a(this.value))
// //     return this.value;
// //   },
// // };
// // value = 100
// // console.log(test_obj.func((value)=>{
// //   console.log(this.value)
// // }));
// // console.log(this.value)
// // module.exports = test_obj


// // expected output: 42
// // var test = function(){this.name = "name"}
// // console.log(this.name)
// // test()
// // console.log(this.name)
// // console.log(this)
// // function globalTest() {
// //   this.name = "global this";
// //   console.log(this.name);
// // }
// // globalTest(); //global this

// // console.log(this.name)

// // var fun1 = function(){
// //   console.log(this)
// // }
// // fun1()
// // var fun2 = () =>{
// //   console.log(this)
// // }
// // fun2()
// // console.log(this)

// // // Document.querySelector().add

// // var isNull = null;
// // var isUndefined = undefined;
// // var a = 1;

// // var judgeType = function (value) {
// //   if(!(!value && typeof(value) !== "undefined" && value !== 0)){
// //     console.log("is not null");
// //   }else {
// //     console.log("null")
// //   }
// //   if(!(typeof(value) === "undefined")){
// //     console.log("is not undefined");
// //   }else{
// //     console.log("undefined")
// //   }
  
// // }

// // judgeType(a);


// // // for (var i = 0; i <= 5; i++) {
// // //     setTimeout(() => {
// // //         console.log(i);
// // //     }, 500);
// // // }


// // // console.log(999.9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)
// // // // arr = [1, 2, 3, null, undefined, 1]
// // // // arr=arr.filter(d=>d)
// // // // // arr = Array.from(new Set(arr))
// // // // console.log(arr)

// // // // for (var i = 1; i <=20; i++){
// // // //   (function (i) {
// // // //     setTimeout(function timer() {
// // // //       console.log(i);
// // // //     }, i*1000)
// // // //   })(i);
// // // // }

// // // // var init = function init() {
// // // //   var name = "Mozilla"; // name 是一个被 init 创建的局部变量
// // // //   function displayName() { // displayName() 是内部函数，一个闭包
// // // //     console.log(name); // 使用了父函数中声明的变量
// // // //   }
// // // //   displayName();
// // // // }
// // // // init();

// // // // let st = "1,2,3";
// // // // array = st.split(',')
// // // // // array = array[0].int()
// // // // console.log(Number(array[0]))




// // // // // var list = document.querySelector('.output ul');
// // // // // var totalBox = document.querySelector('.output p');
// // // // // var total = 0;
// // // // // list.innerHTML = '';
// // // // // totalBox.textContent = '';
// // // // // var arrayList=[        'Underpants:6.99',
// // // // //                 'Socks:5.99',
// // // // //                 'T-shirt:14.99',
// // // // //                 'Trousers:31.99',
// // // // //                 'Shoes:23.99',];

// // // // // for (var i = 0; i <= arrayList.length; i++) { // number 2
// // // // //   let arrayline = arrayList[i].split(':');

// // // // //   // number 4
  
// // // // //   // number 5
// // // // //   itemText = arrayline[0] + '- $ ' + arrayline[1];
  
// // // // //   total +=  Number(arrayline[1]);
  
// // // // //   var listItem = document.createElement('li');
// // // // //   listItem.textContent = itemText;
// // // // //   list.appendChild(listItem);
// // // // // }
// // // // // totalBox.textContent = 'Total: $' + total.toFixed(2);
