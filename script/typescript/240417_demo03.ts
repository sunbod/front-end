// type annotation 类型注解，我们来告诉 TS 变量是什么类型
// type inference 类型推断， TS 会自动的去尝试分析变量的类型
// 如果 TS 能够自动分析，我们就不需要管
// 如果 TS 无法分辨变量类型，我们就需要使用类型注解

// ---------------------------

let count: number;

count = 123;

let count_inference = 123;

// ---------------------------

const firstNumber = 1;
const secondNumber = 2;

const totalNumber = firstNumber + secondNumber;
// ---------------------------
// 这里需要类型注解，入参类型不确定，TS无法推断
function getTotal(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

getTotal(1, 2);