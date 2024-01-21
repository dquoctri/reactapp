import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

const isDevelopment = process.env.NODE_ENV === 'development'
export const SERVER_URL = isDevelopment ? process.env.REACT_APP_SERVER_URL : ""


export const options = {
  baseURL: SERVER_URL,
}

export interface Header {
  name: string
  value?: string | number | boolean
  delegate?: () => string | null
}

export abstract class WebService {
  protected instance: AxiosInstance
  private headers: Header[] = []

  constructor() {
    this.instance = axios.create(options)
    this.instance.interceptors.request.use((config) => {
      if (isDevelopment) { console.info("✉️ ", config); }
      return this.setHeaders(config);
    }, (error) => {
        if (isDevelopment) { console.error("✉️ ", error); }
        return Promise.reject(error);
    }
      )
  }

  protected async get<T>(url: string): Promise<T> {
    const req = this.instance.get<T>(url)
    return this.exec("GET", url, req)
  }

  protected async post<T>(url: string, data?: unknown): Promise<T> {
    const req = this.instance.post<T>(url, data)
    return this.exec("POST", url, req)
  }

  protected async put<T>(url: string, data: unknown): Promise<T> {
    const req = this.instance.put<T>(url, data)
    return this.exec("PUT", url, req)
  }

  protected async patch<T>(url: string, data: unknown): Promise<T> {
    const req = this.instance.patch<T>(url, data)
    return this.exec("PATCH", url, req)
  }

  protected async delete<T>(url: string): Promise<T> {
    const req = this.instance.delete<T>(url)
    return this.exec("DELETE", url, req)
  }

  private async exec<T>(verb: string, url: string, call: Promise<AxiosResponse<T>>): Promise<T> {
    verb = verb.toUpperCase()
    try {
      const res = await call
      if (process.env.NODE_ENV === 'development') {
        console.log(res);
      }
      return res.data
    } catch (err: any) {
      if (err instanceof AxiosError) {
        const message = `${verb} ${url} - Not successful; AxiosError: ${err.message}`;
        console.warn(message);
      } else {
        console.warn(`${verb} ${url} - Request failed`);
      }
      return Promise.reject(err);
    } finally {
      if (process.env.NODE_ENV === 'development') {
        console.info("finally");
      }
    }
  }

  protected addHeader(name: string, value: string): void {
    if (this.isHeaderAlreadyAdded(name)) {
      console.warn(`Duplicate header name ${name}`)
      return
    }
    this.headers.push({ name, value })
  }

  protected addDynamicHeader(name: string, delegate: () => string | null): void {
    if (this.isHeaderAlreadyAdded(name)) {
      console.warn(`Duplicate dynamic header name ${name}`)
      return
    }
    this.headers.push({ name, delegate })
  }

  protected setHeaders(config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> {
    if (!config.headers) {
      console.warn("Skipping setting headers since Axios config headers is null")
      return config
    }
    for (const header of this.headers) {
      const name = header.name
      const value = header.value || (header.delegate && header.delegate())
      if (value === null) {
        console.debug(`Skipping header '${name}' since value is null`)
        continue
      }
      config.headers[name] = value || false
    }
    if (isDevelopment) { console.info("✉️ ", config); }
    return config
  }

  private isHeaderAlreadyAdded(name: string): boolean {
    return this.headers.find((h) => h.name === name) !== undefined
  }
}
