/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-07-21 14:23:23
 * @LastEditTime: 2020-07-21 14:43:30
 * @LastEditors: ssssslf
 */

const a = { val: "a" };
const b = { val: "b" };
const c = { val: "c" };
const d = { val: "d" };
a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a;
while (p) {
  console.log(p.val);
  p = p.next;
}

// 插入

const e = { val: "e" };
c.next = e;
e.next = d;

// 删除
c.next = d;
