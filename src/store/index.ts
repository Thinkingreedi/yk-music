import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch, shallowEqual } from 'react-redux'

const store = configureStore({
    reducer: {
        //...
    }
})

/*
    自定义hooks
    RootState是通过调用store.getState获取的全局状态类型
    使用TypedUseSelectorHook和useSelector从Redux store中获取状态
*/
type GetStateFnType = typeof store.getState
type RootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/*
    自定义hooks
    返回一个与store关联的dispatch函数
    shallowEqualApp是shallowEqual的别名，用于进行浅比较
*/
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual

export default store
