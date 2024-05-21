import { AxiosAdapter } from './http/axios.adapter';


export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '0377c44e9d1df5eee77a6f3325bd4ba6',
    language: 'es'
  }
});