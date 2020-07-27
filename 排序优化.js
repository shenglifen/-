/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-07-24 14:29:03
 * @LastEditTime: 2020-07-24 16:16:30
 * @LastEditors: ssssslf
 */

// 老数据
let oldData = [];
// 随机生成一些存在相同序号的老数据
for (let i = 1; i <= 3000; i++) {
  let nums = Math.floor(Math.random() * 10 + 1);
  for (let j = 0; j < nums; j++) {
    oldData.push(i);
  }
}

//给老数据不重复新编号
let data = [];
const mapNum = new Map();
for (let i of oldData) {
  if (!mapNum.get(i)) {
    data.push(i * 50000000);
    mapNum.set(i, 1);
  } else {
    data.push(i * 50000000 + mapNum.get(i) * 1000000);
    mapNum.set(i, mapNum.get(i) + 1);
  }
}

// 插入前： 有无重复数据
console.log(
  "插入前： 有无重复数据：",
  new Set(data).size === data.length,
  new Set(data).size,
  data.length
);

// 随机头部插入一些数据
function insetTop() {
  const insetNum = Math.floor(Math.random() * 1000 + 500);
  for (let i = 1; i <= insetNum; i++) {
    data.unshift(data[0] - 10000000);
  }
  console.log("头部插入数据量：", insetNum);
  console.log(
    "有无重复数据存在：",
    new Set(data).size === data.length,
    new Set(data).size,
    data.length
  );
}

//  随机中间插入几个数据
function insertMiddle() {
  let insertNum = [];
  for (let i = 1; i <= Math.floor(Math.random() * 1000 + 500); i++) {
    let num = Math.floor(Math.random() * data.length + 1);
    for (let j = 1; j <= Math.floor(Math.random() * 5 + 1); j++) {
      insertNum.push(num);
    }
  }
  for (let i of insertNum) {
    data.push(Number((data[i - 1] + data[i]) / 2));
    data = data.sort();
  }
  console.log("中间插入数据量：", insertNum.length);
  console.log(
    "有无重复数据存在：",
    new Set(data).size === data.length,
    new Set(data).size,
    data.length
  );
}

insetTop();

insertMiddle();
