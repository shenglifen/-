/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-07-27 16:41:30
 * @LastEditTime: 2020-07-27 16:55:37
 * @LastEditors: ssssslf
 */

const bt = require("./bt");

// const preorder = (root) => {
//   if (!root) return;
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right);
// };

const preorder = (root) => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};
preorder(bt);
