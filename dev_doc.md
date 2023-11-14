# dev_doc

## 创建项目

-   使用React脚手架创建项目同时配置TypeScript的支持：
-   `create-react-app yk_music --template typescript`

## 项目配置

-   配置项目的icon

-   配置项目的标题

-   配置项目的别名（craco.config.ts）

    -   ```
        npm i @craco/craco@alpha -D
        ```

        -   配置tsconfig.json

        ```json
            "jsx": "react-jsx",
            "baseUrl": ".",
            "paths": {
              "@/*": ["src/*"]
            }
        ```

        -   编辑craco.config.js

        ```js
        const path = require('path')

        const resolve = (dir) => path.resolve(__dirname, dir)

        module.exports = {
            webpack: {
                alias: {
                    '@': resolve('src')
                }
            }
        }
        ```

        -   修改package.json

        ```json
          "scripts": {
            "start": "craco start",
            "build": "craco build",
            "test": "craco test",
            "eject": "react-scripts eject"
          },
        ```

## 项目规范

**代码编写规范**

-   创建.editorconfig文件

```yaml
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为utf-8
indent_style = space # 缩进风格(tab|space)
indent_size = 4 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅md文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

**代码格式规范**

-   `npm i prettier -D`

*   .prettierrc文件中

```yaml
{ 'useTabs': false, 'tabWidth': 4, 'printWidth': 120, 'singleQuote': true, 'trailingComma': 'none', 'semi': false }
```

-   .prettierignore 忽略文件配置

```yaml
/build/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

-   package.json中

```json
    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject",
        "prettier": "prettier --write ."
    },
```

-   配置好prettier之后，执行命令 `npm run prettier` 就可以格式化所有代码，不需要ctrl + s 保存进行格式化了

*   eslint配置
*   安装 `npm i eslint -D `
*   `npx eslint --init`

> prettier和eslint保持一致
>
> ```
> npm i eslint-plugin-prettier eslint-config-prettier -D
> ```

.eslintrc.js文件中

```
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
```
