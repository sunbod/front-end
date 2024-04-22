const myPromise = new Promise((resolve, reject) => {
  let a = false;
  setTimeout(() => {
    return a ? resolve("a is found!") : reject("sorry, no a");
  }, 3000);
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error); // 这里处理拒绝的错误
  });
