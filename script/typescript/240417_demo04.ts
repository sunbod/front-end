// 返回值类型是确定的，不需要定义，加上后会对代码进行验证
// function add(first: number, second: number): number {
//   return first + second;
// }

// const total = add(1, 2)

// ------------------------

// 没有返回值
function sayHello(): void {
  console.log("hello");
}

// ------------------------

// 永远不会执行完的函数
function errorEmitter(): never {
  throw new Error();
}

// function errorEmitter(): never {
//   while(true){

//   }
// }

// ------------------------

// 解构语法，后面定义对象属性类型
function add({ first, second }: { first: number, second: number }): number {
  return first + second;
}

const total = add({ first: 1, second: 2 });
