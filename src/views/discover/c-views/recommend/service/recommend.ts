import myRequest from '@/service'

export function getBanner() {
    return myRequest.get({
        url: '/banner'
    })
}
