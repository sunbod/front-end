// 访问类型： private, protected, public

// ------------------------------------------------------------------
class Person {
  // public 允许属性与方法在类的内外被调用，不定义时，默认为public
  public name?: string;
  // private 允许在类内使用
  private age?: number;
  // protected 允许在类内及继承的子类中使用
  protected career?: string;
  sayHi() {
    // 类内部调用
    this.name;
    this.age;
    console.log('Hi')
  }
}

const person001 = new Person();
// 类外调用public属性
person001.name = "dell";
// 类外调用privates属性导致报错
// person001.age = 18;
console.log(person001.name);
// 类外调用public方法
person001.sayHi();

// 子类中使用 protected 属性
class Teacher001 extends Person {
  getTeacherName() {
    this.career = "teacher";
  }
}

// ------------------------------------------------------------------

// constructor

// ------------------------------------------------------------------

class Person001 {
  // // 传统写法
  // public name:string;
  // constructor(name:string){
  //   this.name = name;
  // }

  // 简化写法
  constructor(public name: string) { }
}

const person002 = new Person001("dell");
console.log(person002.name);

class Teacher002 extends Person001 {
  constructor(public age: number) {
    // super()相当于父类的构造器，这里需要传递父类构造器需要的参数
    super('dell');
  }
}

const teacher04 = new Teacher002(28);
console.log(teacher04.name);
console.log(teacher04.age);
// ------------------------------------------------------------------
