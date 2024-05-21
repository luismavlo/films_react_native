import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { PopularMovieDBResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}


export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options ): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularMovieDBResponse>('/popular', {
      params: {
        page: options?.page ?? 1
      }
    });

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);

  } catch (error) {
    console.log(error)
    throw new Error('Error fetching movies - popularUseCase')
  }
}