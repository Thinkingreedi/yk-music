import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import TopRankingItem from '@/views/discover/c-views/recommend/c-cpns/top-ranking-item'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
    children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
    const { rankings = [] } = useAppSelector(
        (state) => ({
            rankings: state.recommend.rankings
        }),
        shallowEqualApp
    )
    return (
        <RankingWrapper>
            <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />

            <div className="content">
                {rankings.map((item) => {
                    return <TopRankingItem key={item.id} itemData={item} />
                })}
            </div>
        </RankingWrapper>
    )
}

export default memo(TopRanking)
