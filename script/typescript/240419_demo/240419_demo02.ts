// interface
// 没有interface时如何定义
const getPersonName02: (person: { name: string }) => void = (person) => {
  console.log(person.name)
}

const setPersonName02 = (person: { name: string }, name: string) => {
  person.name = name;
}
type test = string;
// ------------------------------------------------------------------

// interface解决的问题，使定义变得简洁
interface Person02 {
  // 带readonly后，无法修改这个属性
  // readonly name: string;
  name: string;
  // 带？后这个age可有可无，都可以通过类型验证
  age?: number;
};

const getPersonName021: (person: Person02) => void = (person) => {
  console.log(person.name)
}

const setPersonName021 = (person: Person02, name: string): void => {
  person.name = name;
}

const person = {
  name: "dell"
};

getPersonName02(person);

setPersonName021(person, 'lee');

// ------------------------------------------------------------------
// 类应用接口
interface Person021 {
  readonly name: string;
  age?: number;
  say(): string
}

class Human implements Person021 {
  name: "dell";
  say(): string {
    return "Hello";
  }
}

// ------------------------------------------------------------------
// 继承
interface Teacher extends Person021 {
  teach(): string;
}

const setPersonName022 = (person: Teacher, name: string): void => {
  console.log(person.teach)
}

const person021 = {
  name: "dell",
  say() {
    return "Hello";
  },
  teach() {
    return "teach";
  }
}

setPersonName022(person021, "dell")

// ------------------------------------------------------------------

// 声明一个函数类型
interface SayHi {
  // 接受以和字符串类型，返回一个字符串类型
  (word: string): string;
}

const say: SayHi = (word: string) => {
  return word;
}