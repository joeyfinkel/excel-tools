var oldArr = [
  'value',
  0,
  'value',
  1,
  'value',
  2,
  'value',
  3,
  'value',
  4,
  'value',
  5,
  'value',
  6,
  'value',
  7,
  'value',
  8,
  'value',
  9,
  'value',
  10,
];
var arr = [];
var row = [];

var maxVal = 5;
var delta = Math.floor(oldArr.length / maxVal);

// avoid filter because you don't want
// to loop over 10000 elements !
// just access them directly with a for loop !
//                                 |
//                                 V
for (i = 0; i < oldArr.length; i += delta / 2) {
  let obj = {};
  obj[oldArr[i]] = oldArr[i + 1];
  row.push(obj);
}
arr.push(row);
console.log('delta : ' + delta + ' length = ' + oldArr.length);
// console.log(arr);

const res = JSON.stringify(arr, null, '\t');
console.log(res);

const data = [
  ['value', 'a', 'value', 'b', 'value', 'c'],
  ['value', 'd', 'value', 'e', 'value', 'f'],
];
let newData = [];
let data2;

const test = ['value', 'a', 'value', 'b', 'value', 'c'];

// for (let d of data) {
//   const value = "value";
//   d.reduce((a, v) => (data2 = ({ ...a, [value]: v }, {})));
//   newData.push(d.reduce((a, v) => ({ ...a, [value]: v }), {}));
//   // newData.push(d.reduce((a, v) => console.log(v)));
// }

// console.log({ ...['a', 'b', 'c'] });

var obj = data.reduce((acc, cur, i) => {
  acc[i] = cur;
  return acc;
}, {});

console.log(obj);
