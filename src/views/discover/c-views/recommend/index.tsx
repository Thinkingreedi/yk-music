import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDateAction } from './store/recommend'
import { RecommendWrapper } from './style'
import TopBanner from './c-cpns/top-banner'

interface IProps {
    children?: ReactNode
}

const Recommend: FC<IProps> = () => {
    /** 发起action(获取数据) */
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchBannerDateAction())
    }, [])

    /** render函数的返回jsx */
    return (
        <RecommendWrapper>
            <TopBanner />
        </RecommendWrapper>
    )
}

export default memo(Recommend)
