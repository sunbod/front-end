// 基础类型，boolean,number,string,void,undefined,symbol,null
let count: number;
count = 123;

// --------------------------------------------------------
// 对象类型,{},Class,function,[]
/*
  入参必须定义类型，而返回类型可以不写，TS会推断
*/
const func = (str: string): number => {
  return parseInt(str, 10);
}
// 冒号后是函数类型，等号后是函数具体实现，这种写法必须定义返回值类型，否则语法报错
const func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
}
// 这里的date，Ts会推断他的类型，可以不写
const date: Date = new Date()

// 其他的case
interface Person {
  name: 'string'
}

const rawData = '{"name":"dell"}';
const newData: Person = JSON.parse(rawData);

// 特殊情况：前面想定义一个数字变量，后面想变成字符串
let temp: number | string = 123;
temp = "456";

// --------------------------------------------------------
