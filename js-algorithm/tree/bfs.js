/*
 * @Description: 深度优先遍历
 * @Author: ssssslf
 * @Date: 2020-07-27 16:28:59
 * @LastEditTime: 2020-07-27 16:37:18
 * @LastEditors: ssssslf
 */

const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    const n = q.shift();
    console.log(n.val);
    n.children.forEach((child) => {
      q.push(child);
    });
  }
};

console.log(bfs(tree));
