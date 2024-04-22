# Axios Tutorial React

> Ref https://axios-http.com/zh/docs/intro

> Ref https://github.com/john-smilga/axios-tutorial-react

## What's Axios

Axios 是一个基于 [promise](./JS_promise.md) 网络请求库，作用于 node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和 node.js 中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。

### install

```sh
npm install axios
```

## Basic Example

[Example](../script/axios/240422_demo01.ts)

```ts
import axios from "axios";
// const axios = require('axios').default;
// 向给定ID的用户发起请求
axios
  .get("/", { baseURL: "https://www.baidu.com" })
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
```

### POST 请求

- 发起一个 POST 请求

```ts
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

- 发起多个并发请求

```ts
function getUserAccount() {
  return axios.get("/user/12345");
}

function getUserPermissions() {
  return axios.get("/user/12345/permissions");
}

const [acct, perm] = await Promise.all([
  getUserAccount(),
  getUserPermissions(),
]);

// OR

Promise.all([getUserAccount(), getUserPermissions()]).then(function ([
  acct,
  perm,
]) {
  // ...
});
```

- 将 HTML Form 转换成 JSON 进行请求

```ts
const { data } = await axios.post("/user", document.querySelector("#my-form"), {
  headers: {
    "Content-Type": "application/json",
  },
});
```

## Appendix

### await 关键字

在 Axios 中使用 await 的主要作用是等待异步操作（如 HTTP 请求）完成，并获取其结果。Axios 是一个基于 Promise 的 HTTP 客户端，它允许你发送 HTTP 请求并处理响应。当你使用 await 关键字与 Axios 一起使用时，你可以让 JavaScript 等待 Axios 请求完成，然后继续执行后续的代码。这使得异步代码的编写和阅读更加直观和简洁。

例如，当你使用 await 与 Axios 的.get()或.post()方法一起使用时，你的代码会等待请求完成并获取响应，然后才会继续执行后面的代码。这样，你可以在请求完成后立即使用响应数据，而不需要使用.then()方法来处理响应。

以下是一个使用 await 与 Axios 的示例：

```ts
const handleSubmit = async () => {
  try {
    const response = await axios.post(url, userData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

[Example](../script/axios/240422_demo02.ts)
