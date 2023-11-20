import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from 'react-redux'

import playerReducer from '@/views/player/store/player'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import rankingReducer from '@/views/discover/c-views/ranking/store/ranking'
import djradioReducer from '@/views/discover/c-views/djradio/store/djradio'

const store = configureStore({
    reducer: {
        recommend: recommendReducer,
        player: playerReducer,
        ranking: rankingReducer,
        djradio: djradioReducer
    }
})

/*
    自定义hooks
    RootState是通过调用store.getState获取的全局状态类型
    使用TypedUseSelectorHook和useSelector从Redux store中获取状态
*/
type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

/*
    自定义hooks
    返回一个与store关联的dispatch函数
    shallowEqualApp是shallowEqual的别名，用于进行浅比较
*/
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual

export default store
