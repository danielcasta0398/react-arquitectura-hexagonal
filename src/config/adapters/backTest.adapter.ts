import { AxiosAdapter } from "./http/axios.adapter";

export const backTestFetch = new AxiosAdapter({
  baseURL: "http://localhost:3000",
});
