// 数组的声明注解
// 声明一个数字或字符串的数组
const arr01: (number | string)[] = [1, 2, '3', 4];

// 声明一个字符串的数组
const str01: string[] = ["1", "2"];

// 声明一个未定义的数组
const undefinedArr01: undefined[] = [undefined, undefined];

// 声明一个对象数组
const objectArr01: { name: string, age: number }[] = [{ name: "dell", age: 28 }];

// -------------------------------------------
// type alias 类型别名，简化对象声明
interface User {
  name: string;
  age: number
};

class Teacher {
  name: string;
  age: number;
}
const objArr01: User[] = [{ name: "dell", age: 28 }];
const objArr011: Teacher[] = [
  new Teacher(),
  // 这个元素是一个对象，但只要符合类型定义的属性就可以方进来
  { name: "dell", age: 28 }];

// -------------------------------------------
// 元组 tuple
// 可以对数组中每一个元素的属性起到约束作用
// 数量个数有限的数组，同时类型固定
const tupleArr01: [string, string, number] = ["dell", "male", 28];
// 使用场景：csv、excel导出的数据
const tupleArr011: [string, string, number][] = [
  ["dell", "male", 28],
  ["sun", "female", 18],
  ["john", "male", 28]
];