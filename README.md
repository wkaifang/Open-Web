# Open-Web

Full Stack Template

### 目录结构

``` shell
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
```

#### ESLint

```bash
eslint
eslint-loader
prettier
eslint-config-prettier
eslint-plugin-prettier
babel-eslint // 仅在使用ESLint本身不支持的类型（流）或实验功能时，才需要使用babel-eslint。
eslint-plugin-babel // 与babel-eslint配套的eslint插件。
```

#### PostCSS

```bash
postcss-loader
postcss-preset-env // 内含autoprefixer
precss
lost
stylelint
stylelint-config-recommended
stylelint-config-standard
stylelint-config-prettier
stylelint-prettier
```
