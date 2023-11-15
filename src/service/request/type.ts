import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface MYInterceptors<T = AxiosResponse> {
    requestSuccessFn?: (config: AxiosRequestConfig | any) => AxiosRequestConfig | any
    // requestSuccessFn?: (config: any) => any
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (res: T) => T
    responseFailureFn?: (err: any) => any
}

export interface MYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: MYInterceptors<T>
}
