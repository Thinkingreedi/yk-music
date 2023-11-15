import { BASE_URL, TIME_OUT } from './config'
import MYRequest from './request'

const myRequest = new MYRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

export default myRequest
