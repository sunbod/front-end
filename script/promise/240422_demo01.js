const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is the eventual value the promise will return");
  }, 3000);
});

console.log(
  myPromise.then((value) => {
    console.log(value);
  })
);

setTimeout(() => {
  console.log(console.log(myPromise));
}, 3000);

// const anotherPromise = Promise.resolve(
//   "this is the eventual value the promise will return"
// );

// console.log(anotherPromise);
