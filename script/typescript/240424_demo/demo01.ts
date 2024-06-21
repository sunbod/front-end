// ------------------------------------------------------------------

// class Person05 {
//   private _name: string
//   constructor(name: string) {
//     this._name = name;
//   }

//   get name() {
//     return this._name
//   }
// }
// const person05 = new Person05("dell");

// console.log(person05.name);

// ------------------------------------------------------------------

// readonly

// ------------------------------------------------------------------

// class Person05 {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const person05 = new Person05("dell");
// // 允许读，不允许改
// // person05.name = "lee";
// console.log(person05.name);

// ------------------------------------------------------------------

// 抽象类

// ------------------------------------------------------------------

// 定义抽象类 图形类
abstract class Geom {
  width: number = 0;
  getType() {
    return "Geom";
  }
  // 抽象方法不可以定义函数体做具体实现，继承他的子类必须实现抽象类
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea(): number {
    return 123;
  }
}

class Square { }

class Triangle { }

// ------------------------------------------------------------------

interface Person06 {
  name: string;
}

interface Student extends Person06 {
  age: number;

}

interface Teacher extends Person06 {
  teachingAge: number;
}

const student = {
  name: "lee",
  age: 18
}

const teacher = {
  name: "dell",
  teachingAge: 3
}

const getUserInfo = (user: Person06) => {
  console.log(user.name);
}

getUserInfo(teacher);

getUserInfo(student);