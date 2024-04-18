# Get Start

TypeScript 是 JavaScript 的语法超集，它添加了静态类型。
这基本上意味着 TypeScript 在 JavaScript 之上添加了语法，允许开发人员添加类型。

## Why TypeScript

TypeScript 对比 JavaScript 的好处：

- Ts 使用静态类型，Js 使用动态类型，静态类型在开发过程中，编辑器就可以反馈语法是否正确
- Ts 有更有好的语法提示与补全

### 动态类型 VS 静态类型

动态类型和静态类型是编程语言中两种不同的类型系统，它们决定了变量的类型检查何时发生以及如何进行。

动态类型（Dynamic Typing）：在动态类型的语言中，类型检查是在运行时进行的。这意味着你可以在程序执行时随时改变变量的类型，而不需要在编写代码时就确定变量的类型。JavaScript 就是一个动态类型的语言，它允许你在运行时改变变量的类型。例如：

```js
let a;
a = 0; // 数字类型
console.log(a); // 输出 0
a = "Hello world"; // 字符串类型
console.log(a); // 输出 Hello world
a = { key: "value" }; // 对象类型
console.log(a); // 输出 {key:'value'}
```

静态类型（Static Typing）：在静态类型的语言中，类型检查是在编译时或构建时进行的。这意味着在编写代码时，你需要明确指定变量的类型，或者让编译器自动推断出变量的类型。TypeScript 就是一个静态类型的语言，它在编译时检查类型，确保类型的正确性。例如，如果你尝试将一个数字赋值给一个之前被推断为字符串类型的变量，TypeScript 编译器会报错。

## Build TypeScript Env

1. install node

```sh
# After installed
(base) bo@pc:~$ node -v
v20.11.1
(base) bo@pc:~$ npm -v
10.2.4
# 全局安装TypeScript
(base) bo@pc:~$ npm install typescript -g

added 1 package in 2s
# ts 文件不可以直接在浏览器和node环境运行
(base) bo@pc:~/Documents/work/git/private/front-end/script/typescript$ node 240417_demo01.ts
/home/bo/Documents/work/git/private/front-end/script/typescript/240417_demo01.ts:2
type Point1 = { x: number, y: number }
     ^^^^^^

SyntaxError: Unexpected identifier 'Point1'
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.11.1

# tsc 即 TypeScript compile ，生成一个js文件
(base) bo@pc:~/Documents/work/git/private/front-end/script/typescript$ tsc 240417_demo01.ts
```

现在的开发流程是编写 TS 文件，编译成 JS 后，再使用 node 运行，为了简化流程，安装以下插件：

```sh

(base) bo@pc:~/Documents/work/git/private/front-end/script/typescript$ npm -g install ts-node

added 20 packages in 5s
# 运行ts文件
(base) bo@pc:~/Documents/work/git/private/front-end/script/typescript$ ts-node 240417_demo01.ts
asd
```

## Basic Sync

### 基础类型和对象类型

[Example code](../script/typescript/240417_demo02.ts)

### 类型注解和类型推断

[Example code](../script/typescript/240417_demo03.ts)

### 函数相关类型

```ts
function hello() {}
const hello1 = function () {};
const hello2 = () => {};
```

[Example code](../script/typescript/240417_demo04.ts)

### 基础语法总结

[Example code](../script/typescript/240417_demo05.ts)
