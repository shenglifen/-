/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-07-24 16:04:52
 * @LastEditTime: 2020-07-27 17:26:15
 * @LastEditors: ssssslf
 */
let a = [6000, 7000, 8000];

// location: 插入位置
// insetNum： 插入个数
// resetNum： 间隔
const insetLocation = (location, insetNum = 10, resetNum = 2) => {
  // 一直往第location个位置插入数据
  let reset = [];
  for (let i = 1; i <= insetNum; i++) {
    if (a[location - 1] - a[location - 2] <= resetNum) {
      let num = a[location - 2] + (a[location - 1] - a[location - 2]) * 500;
      let a1 = a.filter((v) => v <= a[location - 2]);
      let a2 = a.filter((v) => v > num);
      let a3 = a.filter((v) => v > a[location - 2] && v <= num);
      let newA3 = [];
      let diff = (num - a[location - 2]) / (a3.length + 1);
      for (let j = 0; j < a3.length; j++) {
        newA3.push(parseInt(a[location - 2] + diff * (j + 1)));
      }
      reset.push(i + "----" + newA3.length);
      a = a1.concat(newA3).concat(a2);
    }
    let j = (a[location - 1] + a[location - 2]) / 2;
    let insert = parseInt(j);
    a.splice(location - 1, 0, insert);
  }
  // console.log(`\n==============${location}=============================`);
  // console.log(a);
  console.log(
    "有无重复数据：",
    new Set(a).size === a.length,
    new Set(a).size,
    a.length,
    insetNum
  );
  return reset;
};

// insetLocation(2, 400);
// insetLocation(3, 50);

// insetLocation(10, 50);
