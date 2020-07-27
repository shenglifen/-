/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-07-21 18:42:32
 * @LastEditTime: 2020-07-21 19:07:31
 * @LastEditors: ssssslf
 */

const instanceOf = (A, B) => {
  let p = A;
  while (p) {
    if (p === B.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
};

console.log(instanceOf([], Function));
console.log(instanceOf([], Object));

const foo = {},
  F = function () {};
Object.prototype.a = "value a";
Function.prototype.b = "value b";
