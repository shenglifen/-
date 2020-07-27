/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-07-21 19:14:24
 * @LastEditTime: 2020-07-21 19:16:45
 * @LastEditors: ssssslf
 */

// 去重
const arr = [1, 2, 3, 1, 3, 5];
const arr2 = [...new Set(arr)];

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(3);

// 求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter((v) => set2.has(v)));

console.log(set, set3);
