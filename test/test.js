let st = "1,2,3";
array = st.split(',')
// array = array[0].int()
console.log(Number(array[0]))



var arrayList=[ 'Underpants:6.99',
              'Socks:5.99',
              'T-shirt:14.99',
              'Trousers:31.99',
              'Shoes:23.99',];

var itemText = '';
var total = 0;
for (var i = 0; i <= arrayList.length-1; i++) {
  let arrayline = arrayList[i].split(':');
  itemText = arrayline[0] + '- $ ' + arrayline[1];
  console.log(itemText)
  total +=  parseFloat(arrayline[1]);
  console.log(total)
}

