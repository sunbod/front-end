# Experience summary

`Vite` 与 React 的关系主要体现在 `Vite` 作为一个现代化的前端构建工具，能够为 `React` 项目提供快速的开发环境和优化的生产构建。`Vite` 利用浏览器原生的 ES 模块（`ECMAScript modules`）来链接 `JavaScript` 文件，这意味着在开发过程中，只有修改的文件需要重新构建，而不是整个项目，从而大大提高了开发效率和项目启动速度。

- 集成和兼容性

- 开发服务器和构建优化
    1. `Vite` 的开发服务器提供了快速的模块热替换（Hot Module Replacement，HMR）
    2. `Vite` 在构建生产环境的代码时，使用 `Rollup` 打包器，这可以帮助减少最终构建的大小，并优化代码以提高加载速度和性能

- 简化项目设置
    `Vite` 提供了一个简化的项目设置过程，使得开发者可以快速创建新的 `React` 项目。

总的来说，`Vite` 与 `React` 的关系是紧密的，Vite 提供了一个高效、现代化的开发环境，使得 `React` 开发者可以更快速、更高效地开发和构建他们的项目。

## Build React project

```sh
npm create vite@latest $project_name

cd $project_name

npm install antd
```