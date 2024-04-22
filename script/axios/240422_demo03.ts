import axios from 'axios';
import fs from 'fs'; // 引入fs模块
// 在 node.js 用GET请求获取远程图片
axios({
  method: "get",
  url: "http://bit.ly/2mTM3nY",
  responseType: "stream",
})
  .then(function (response) {
    console.log("loading...")
    response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    console.log("Complete ")
  });
