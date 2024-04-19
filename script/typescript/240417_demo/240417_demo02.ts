// 基础类型 null, undefined, symbol, boolean, void
const count02: number = 123;
const teacherName: string = "Dell";

// --------------------------
// 对象类型
class Person { };
// 对象类型
const teacher: {
  name: string,
  age: number
} = {
  name: "Dell",
  age: 18
};
// 数组类型
const numbers: number[] = [2, 4, 1, 5];
// 类类型
const dell: Person = new Person();

/* 函数类型
  ()他是一个函数
  返回一个数字类型
  () => {}具体函数实现
*/
const getTotal02: () => number = () => {
  return 123;
}
// --------------------------
