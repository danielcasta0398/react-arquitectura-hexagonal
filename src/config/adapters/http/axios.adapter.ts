import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options {
  baseURL: string;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({ baseURL: options.baseURL });
  }

  async get<T>(url: string): Promise<T> {
    const data = await this.axiosInstance.get(url);
    return data.data;
  }

  async post<T>(url: string, body: Record<string, unknown>): Promise<T> {
    const data = await this.axiosInstance.post(url, body);
    return data.data;
  }

  async put<T>(url: string, body: Record<string, unknown>): Promise<T> {
    const data = await this.axiosInstance.put(url, body);
    return data.data;
  }
}
