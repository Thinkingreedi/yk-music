import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner } from '../service/recommend'

export const fetchBannerDateAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
    const res = await getBanner()
    dispatch(changeBannersAction(res.banners))
})

interface RecommendState {
    banners: any[]
}

const initialState: RecommendState = {
    banners: []
}

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, action) {
            state.banners = action.payload
        }
    }
})

export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
