// 定义一个类

// ------------------------------------------------------------------
class Person03 {
  name = "dell";
  getName03() {
    return this.name;
  }
}

// const person = new Person03();
// console.log(person.getName());

// ------------------------------------------------------------------

// 类的继承

// ------------------------------------------------------------------
class Teacher03 extends Person03 {
  getTeacherName03() {
    return "Teacher";
  }
  // 重写getName方法
  getName03() {
    // 通过super重新获取父类方法
    return super.getName03() + " lee";
  }
}

const teacher03 = new Teacher03();
console.log(teacher03.getName03());
console.log(teacher03.getTeacherName03());
// ------------------------------------------------------------------
