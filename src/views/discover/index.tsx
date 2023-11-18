import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from './c-cpns/index'

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Suspense fallback="loading...">
                <Outlet />
            </Suspense>
        </div>
    )
}

export default memo(Discover)
