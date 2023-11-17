import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
    children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
    /* 组件的展示逻辑 */
    function showItem(item: any) {
        if (item.type === 'path') {
            return (
                <NavLink
                    to={item.link}
                    className={({ isActive }) => {
                        return isActive ? 'active' : undefined
                    }}
                >
                    {/* Link和NavLink都是用来创建导航链接的，用户点击NavLink时如果链接与当前YRL匹配，已渲染的元素会添加特定的样式参数 */}
                    {item.title}
                    <i className="icon sprite_01"></i>
                </NavLink>
            )
        } else {
            return (
                <a href={item.link} target="_blank" rel="noreferrer">
                    {/* rel="noreferrer"属性表示链接的目标页面不会发送引用页面的URL给服务器，以保护用户的隐私 */}
                    {item.title}
                </a>
            )
        }
    }
    return (
        <HeaderWrapper>
            <div className="content">
                <HeaderLeft>
                    <a className="logo sprite_01" href="#/">
                        网易云音乐
                    </a>
                    <div className="select-list">
                        {headerTitles.map((item) => {
                            return (
                                <div className="select-item" key={item.title}>
                                    {showItem(item)}
                                </div>
                            )
                        })}
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/播客" prefix={<SearchOutlined />} />
                    <span className="center">创作者中心</span>
                    <span className="login">登录</span>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
}

export default memo(AppHeader)
