/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-07-23 10:45:15
 * @LastEditTime: 2020-07-23 10:55:59
 * @LastEditors: ssssslf
 */

let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("some text");

// 储存位置不同
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add(o);
mySet.add({ a: 1, b: 2 });

const has = mySet.has(o);

mySet.delete(5);

for (let item of mySet) {
  console.log(item);
}

for (let item of mySet.keys()) {
  console.log(item);
}

for (let item of mySet.values()) {
  console.log(item);
}

for (let [key, value] of mySet.entries()) {
  console.log(key, value);
}

// set->array
const myArr = Array.from(mySet);
const myArr1 = [...mySet];

// array->set
const mySet2 = new Set([1, 2, 3]);

// 交集
const intersection = new Set([...mySet].filter((v) => mySet2.has(v)));

// 差集
const difference = new Set([...mySet].filter((v) => !mySet2.has(v)));
