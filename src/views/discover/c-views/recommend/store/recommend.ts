import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner, getHotRecommend, getNewAlbum, getPlaylistDetail, getArtistList } from '../service/recommend'

// 获取推荐数据
export const fetchRecommendDataAction = createAsyncThunk('fetchdata', (_, { dispatch }) => {
    getBanner().then((res) => {
        dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
        dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
        dispatch(changeNewAlbumAction(res.albums))
    })
    getArtistList(5).then((res) => {
        dispatch(changeSettleSingersAction(res.artists))
    })
})

// 获取榜单数据
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk('rankingData', (_, { dispatch }) => {
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
        promises.push(getPlaylistDetail(id))
    }

    Promise.all(promises).then((res) => {
        const playlists = res.map((item) => item.playlist)
        dispatch(changeRankingsAction(playlists))
    })
})

// export const fetchBannerDateAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
//     const res = await getBanner()
//     dispatch(changeBannersAction(res.banners))
// })

// export const fetchHotRecommendAction = createAsyncThunk('hotRecommend', async (arg, { dispatch }) => {
//     const res = await getHotRecommend(8)
//     dispatch(changeHotRecommendAction(res.result))
// })

// export const fetchNewAlbumAction = createAsyncThunk('newAlbum', async (arg, { dispatch }) => {
//     const res = await getNewAlbum()
//     dispatch(changeNewAlbumAction(res.albums))
// })

interface RecommendState {
    banners: any[]
    hotRecommends: any[]
    newAlbums: any[]
    rankings: any[]
    settleSingers: any[]
}

const initialState: RecommendState = {
    banners: [],
    hotRecommends: [],
    newAlbums: [],
    rankings: [],
    settleSingers: []
}

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }) {
            state.banners = payload
        },
        changeHotRecommendAction(state, { payload }) {
            state.hotRecommends = payload
        },
        changeNewAlbumAction(state, { payload }) {
            state.newAlbums = payload
        },
        changeRankingsAction(state, { payload }) {
            state.rankings = payload
        },
        changeSettleSingersAction(state, { payload }) {
            state.settleSingers = payload
        }
    }
})

export const {
    changeBannersAction,
    changeHotRecommendAction,
    changeNewAlbumAction,
    changeRankingsAction,
    changeSettleSingersAction
} = recommendSlice.actions
export default recommendSlice.reducer
