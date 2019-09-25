# Open-Web

Full Stack Template

### 目录结构

```shell
.
├── README.md
├── admin
│   └── package.json
├── package.json
├── server
│   └── package.json
└── webapp
    └── package.json
```

### 工程依赖

#### webpack

```bash
webpack
webpack-cli
webpack-dev-server // 或者webpack-dev-middleware
webpack-merge
webpack-bundle-analyzer
style-loader
css-loader
file-loader
url-loader
source-map-loader
html-webpack-plugin
mini-css-extract-plugin
clean-webpack-plugin
```

#### Babel

```bash
@babel/core
@babel/cli
@babel/preset-env
babel-loader

@babel/runtime // 或者@babel/runtime-corejs2
@babel/plugin-transform-runtime
@babel/plugin-syntax-dynamic-import
```

#### CSS

```bash
less
less-loader

postcss-loader
postcss-preset-env // 内含autoprefixer
```

#### ESLint

```bash
eslint
eslint-loader
babel-eslint // 仅在使用ESLint本身不支持的类型（流）或实验功能时，才需要使用babel-eslint。
eslint-plugin-babel // 与babel-eslint配套的eslint插件。
eslint-plugin-html
```

#### stylelint

```bash
stylelint
stylelint-webpack-plugin // 或者postcss-loader
stylelint-config-recommended
```

#### Prettier

```bash
prettier
eslint-config-prettier
eslint-plugin-prettier
stylelint-config-prettier
stylelint-prettier
```

#### React

```bash
@babel/preset-react
eslint-plugin-react
react-hot-loader
```

#### Vue

```bash
vue-loader
vue-template-compiler
vue-eslint-parser
eslint-plugin-vue
vue-style-loader // 构建Vue SSR应用时，替代style-loader
```

#### TypeScript

```bash
typescript
ts-loader
@babel/preset-typescript
@babel/plugin-transform-typescript
@typescript-eslint/parser
@typescript-eslint/eslint-plugin
```
