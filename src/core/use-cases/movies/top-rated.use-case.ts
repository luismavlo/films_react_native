import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { PopularMovieDBResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';



export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<PopularMovieDBResponse>('/top_rated');

    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);

  } catch (error) {
    console.log(error)
    throw new Error('Error fetching movies - topRatedUseCases')
  }
}