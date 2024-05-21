import { Cast } from '../../core/entities/cast.entity';
import { Movie } from '../../core/entities/movie.entity';
import { MovieDBCast } from '../interfaces/movie-db.responses';


export class CastMapper {
  static fromMovieDBcastToEntity( actor: MovieDBCast): Cast {
    return new Cast(
      actor.id,
      actor.name,
      actor.character ?? 'No character',
      actor.profile_path ? 
        `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 
        'https://i.stack.imgur.com/l60Hf.png'
    );
  }
}