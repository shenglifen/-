/*
 * @Description: 深度优先遍历
 * @Author: ssssslf
 * @Date: 2020-07-27 16:28:59
 * @LastEditTime: 2020-07-27 16:32:13
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

const dfs = (root) => {
  console.log(root.val);
  root.children.forEach(dfs);
};

console.log(dfs(tree));
