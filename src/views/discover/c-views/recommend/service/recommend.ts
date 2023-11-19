import myRequest from '@/service'

export function getBanner() {
    return myRequest.get({
        url: '/banner'
    })
}

export function getHotRecommend(limit = 30) {
    return myRequest.get({
        url: '/personalized',
        params: {
            limit
        }
    })
}

export function getNewAlbum() {
    return myRequest.get({
        url: '/album/newest'
    })
}

export function getPlaylistDetail(id: number) {
    return myRequest.get({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}

export function getArtistList(limit = 30) {
    return myRequest.get({
        url: 'artist/list',
        params: {
            limit
        }
    })
}
