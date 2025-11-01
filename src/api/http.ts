import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

class http {
  private instance: AxiosInstance;
  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(
      Object.assign(
        {
          baseURL: "",
          timeout: 10000,
        } as AxiosRequestConfig,
        config
      )
    );
    //请求拦截器
    this.instance.interceptors.request.use((config) => {
      // 加请求头等操作
      return config;
    });

    //响应拦截器
    this.instance.interceptors.response.use(
      (resp) => resp,
      (error) => {}
    );
  }
  //请求封装
  public get<T = unknown>(url: string, config: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config);
  }
  public post<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.post(url, data, config);
  }
  public put<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.put(url, data, config);
  }
  public delete<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.delete(url, config);
  }
}

export default new http();
