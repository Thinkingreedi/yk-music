dev_doc

## 创建新项目

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



**代码检测规范**

*   安装 :`npm i eslint-plugin-prettier eslint-config-prettier -D ` ，生成： `npx eslint --init`

* .eslintrc.js文件中

```yaml
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        //解决eslint和prettier冲突问题
        'plugin:prettier/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    }
}
```



## 项目目录

~~~yaml
├─assets
│  ├─css
│  ├─data
│  ├─img
│  └─theme
├─base-ui
├─components
├─hooks
├─router
├─service
├─store
├─utils
└─views
~~~



## 样式重置/设置

* 安装：`npm i normalize.css`，在index.tsx中引入
* 安装：`npm i craco-less@2.1.0-alpha.0`，配置index.less/common.less/reset.less
* 编辑craco.config.js：

~~~js
const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    plugins: [{ plugin: CracoLessPlugin }],
    webpack: {
        alias: {
            '@': resolve('src')
        }
    }
}
~~~



## **路由配置**

* 安装：`npm i react-router-dom`
* 配置单独路由文件：

~~~tsx
//  router/index.tsx
import React from 'react'
import { RouteObject } from 'react-router-dom'

import Discover from '@/views/discover'

const routes: RouteObject[] = [
    {
        path: '/discover',
        element: <Discover />
    }
]

export default routes

~~~

* 使用HashRouter

~~~tsx
//  index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import './assets/css/index.less'

import App from '@/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <HashRouter>
        <App />
    </HashRouter>
)
~~~

* 使用useRouters

~~~tsx
//  App.tsx
import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
    return <div className="App">{useRoutes(routes)}</div>
}

export default App
~~~



## props类型约束

**方式一**

~~~tsx
import React from 'react'
import type { FC,ReactNode } from 'react'
interface IProps {
    name: string
    age: number
    height?: number
}

const Download = (props: IProps) => {
    return <div>Download- props.name{props.name}</div>
}

export default Download
~~~

**方式二**

~~~tsx
import React,{memo} from 'react'
import type { FC,ReactNode } from 'react'

interface IProps {
    children?: ReactNode
    name: string
    age: number
    height?: number
}

const Download: FC<IProps> = (props) => {
    return (
        <div>
            <div>name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>{props.children}</div>
        </div>
    )
}
export default memo(Download)
~~~



## 代码片段配置

* 文件--首选项--配置用户代码片段--typescriptreact.json

~~~json
"react typescript": {
  "prefix": "tsreact",
  "body": [
    "import React, { memo } from 'react'",
    "import type { FC, ReactNode } from 'react'",
    "",
    "interface IProps {",
    "    children?: ReactNode",
    "}",
    "",
    "const ${1:Home}: FC<IProps> = () => {",
    "    return <div>${1:Home}</div>",
    "}",
    "",
    "export default memo(${1:Home})",
    ""
  ],
  "description": "react typescript"
}
~~~



## 路由配置优化

* 根据创建的文件完善好路由配置
* 对路由组件进行懒加载引入
* 懒加载的组件可能没加载完成，使用Suspense包裹
* 新建discover子页面，并进行子页面路由配置



## 状态管理配置

* 安装：`npm i @reduxjs/toolkit react-redux`
* store文件夹下创建store.ts，index.tsx引入store，并通过Provider包裹提供store
* 官网：https://react-redux.js.org/using-react-redux/usage-with-typescript。创建store，定义state类型，useSelector, useDispatch的ts类型

~~~ts
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch, shallowEqual } from 'react-redux'

const store = configureStore({
    reducer: {
        //...
    }
})

type GetStateFnType = typeof store.getState
type RootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual

export default store

~~~



## 封装网络请求

* 安装：`npm i axios`

* axios二次封装，配置config和request，并创建实例
* useState()定义数据类型

  -   工具1： **json to typescript**，链接：[JSON to TypeScript (transform.tools)](https://transform.tools/json-to-typescript)
  -   工具2：**在线JSON转typescript**，链接：[在线JSON转typescript工具](https://tooltt.com/json2typescript/)



## 环境区分

~~~ts
// 1.手动切换
export const BASE_URL = 'http://codercba.com:9002'
// export const BASE_URL = 'http://codercba.prod:9002'
export const TIME_OUT = 10000

// 2.依赖当前环境：development/production
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//     BASE_URL = 'http://codercba.dev:9002'
// } else {
//     BASE_URL = 'http://codercba.prod:9002'
// }

// export { BASE_URL }

// 3.从定义的环境变量的配置文件中，加载变量
// console.log(process.env.REACT_APP_BASE_URL)

~~~

- .env.development配置文件
  `REACT_APP_BASE_URL=http://codercba.dev.9002`

- .env.production配置文件

  `REACT_APP_BASE_URL=http://codercba.prod:9002`



## TS类组件

~~~ts
import { PureComponent, ReactNode } from 'react'

interface IProps {
    msg: string
    count?: number
}

interface IState {
    name: string
    age: number
}

export class Demo02 extends PureComponent<IProps, IState> {
    state = {
        name: 'john',
        age: 18
    }
    render(): ReactNode {
        return (
            <div>
                {this.state.name}-{this.state.age}
                props:{this.props.msg}
            </div>
        )
    }
}
~~~



## styled-components

-   安装： `npm i styled-components -D`
-   同时安装类型声明： `npm i @types/styled-components -D`



## antd集成

* 安装：`npm i antd`
* 最新的antd（"antd":"^5.7.3"），安装好后，直接在组件中使用即可
* icon图标需单独安装 `npm i --save @ant-design/icons`



### 动态样式

* 安装：`npm i classnames`

~~~js
<ul className="dots">
    {banners.map((item, index) => {
        return (
            <li key={item.imageUrl}>
                <span
                    className={classNames('item', {
                    active: index === currentIndex
                        })}
                ></span>
            </li>
        )
    })}
</ul>
~~~

