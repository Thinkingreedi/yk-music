import myRequest from '@/service'

export function getSongDetail(ids: number) {
    return myRequest.get({
        url: '/song/detail',
        params: {
            ids
        }
    })
}

export function getSongLyric(id: number) {
    return myRequest.get({
        url: '/lyric',
        params: {
            id
        }
    })
}

export function getSimiPlaylist(id: number) {
    return myRequest.get({
        url: '/simi/playlist',
        params: {
            id
        }
    })
}

export function getSimiSong(id: number) {
    return myRequest.get({
        url: '/simi/song',
        params: {
            id
        }
    })
}
