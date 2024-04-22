import axios from "axios";
// const axios = require('axios').default;
// 向给定ID的用户发起请求
axios
  .get("/", { baseURL: 'https://www.baidu.com' })
  .then(function (response) {
    // 处理成功情况
    console.log(response.status);
    console.log(response.headers);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .finally(function () {
    // 总是会执行
  });
// 上述请求也可以按以下方式完成（可选）
axios.get('/user', {
  params: {
    ID: 12345
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // 总是会执行
  });

// 支持async/await用法
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
