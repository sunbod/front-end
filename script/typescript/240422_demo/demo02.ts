// getter and setter
// ------------------------------------------------------------------
class Person04 {
  constructor(private _name: string) { }
  // 看着是一个方法，其实他是一个属性
  get name() {
    return this._name + " lee";
  }
  set name(name: string) {
    const realName = name.split(' ')[1];
    this._name = realName;
  }
}

const person003 = new Person04("dell");
// get 方法的调用和属性一样，不需要带括号
console.log(person003.name);
person003.name = "dell lee"
console.log(person003.name);

// ------------------------------------------------------------------

// 单例模式demo
// 一个类只允许他创建一个实例

// ------------------------------------------------------------------

class Demo001 {
  private static _instance: Demo001;
  // 私有化构造器，不允许使用new关鍵字随意创建实例
  private constructor(public name: string) { }

  // static 把这个方法直接挂到类上而不是实例上
  static getInstance(name: string) {
    // 第一次调用时，this._instance是null或undefined,会创建一个，后面调用都是直接返回第一次的实例
    if (!this._instance) {
      this._instance = new Demo001(name);
    }
    return this._instance;
  }
}


const demo01 = Demo001.getInstance('dell');
const demo02 = Demo001.getInstance('lee');
console.log(demo01.name);
console.log(demo02.name);