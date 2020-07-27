/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-07-27 16:45:05
 * @LastEditTime: 2020-07-27 17:00:23
 * @LastEditors: ssssslf
 */
const bt = require("./bt");

// const inorder = (root) => {
//   if (!root) return;
//   inorder(root.left);
//   console.log(root.val);
//   inorder(root.right);
// };

const inorder = (root) => {
  if (!root) return;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

inorder(bt);
