import { FullMovie, Movie } from '../../core/entities/movie.entity';
import type { MovieDBMovie, PopularMovieDBResponse, Result } from '../interfaces/movie-db.responses';

export class MovieMapper {

  static fromMovieDBResultToEntity (result: Result): Movie {
    return new Movie(
      result.id,
      result.title,
      result.overview,
      new Date(result.release_date),
      result.vote_average,
      `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
    )
  }

  static fromMovieDBToEntity( movie: MovieDBMovie ): FullMovie {
    return new FullMovie(
      movie.id,
      movie.title,
      movie.overview,
      new Date(movie.release_date),
      movie.vote_average,
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,

      movie.genres.map(genre => genre.name),
      movie.runtime,
      movie.budget,
      movie.original_title,
      movie.production_companies.map( company => company.name )
    )
  }

}