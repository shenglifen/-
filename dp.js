/*
 * @Description:
 * @Author: ssssslf
 * @Date: 2020-06-02 11:21:49
 * @LastEditTime: 2020-06-15 17:24:37
 * @LastEditors: ssssslf
 */

//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢
// dp[0] = 0 dp[1] = 1 dp[2] = 2
// dp[n] = dp[n-1] + dp[n-2]  到达第n阶楼梯有从n-1阶走一步和从第n-2阶走两步两种情况

const climbStairs = (n) => {
  let dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额
// dp[n] = num +MAx(dp[n-1])
const rob = (nums) => {
  if (nums.length === 0 || nums.length === 1) return 0;
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  if (nums.length === 3) return Math.max(nums[0] + nums[2], nums[1]);
  let dp = [
    nums[0],
    Math.max(nums[0], nums[1]),
    Math.max(nums[0] + nums[2], nums[1]),
  ];
  for (let i = 3; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};


var names = ["iPhoneX", "iPhoneXS"] 
 
var colors = ["黑色", "白色"] 
 
var storages = ["64g", "256g"] 
var aaa = [1,2,]
 
function combine(...args) { 
  return args.reduce((prev, item) => { 
    console.log(prev,item)
    let result = [] 
    prev.forEach((itm) => { 
      let t = [].concat(itm) 
      item.forEach((it) => { 
        result.push([...t, it]) 
      }) 
    }) 
    return result 
  }) 
} 
const a = combine(names, colors, storages,aaa)
console.log(a)