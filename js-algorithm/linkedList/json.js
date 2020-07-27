/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-07-21 19:07:35
 * @LastEditTime: 2020-07-21 19:08:39
 * @LastEditors: ssssslf
 */
const json = {
  a: { b: { c: 1 } },
  d: { e: 3 },
};

const path = ["a", "b", "c"];

let p = json;
path.forEach((k) => {
  p = p[k];
});
