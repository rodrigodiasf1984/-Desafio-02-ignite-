import { ContentProps } from '../@types/types';
import { MovieCard } from './MovieCard';
import {Header} from './Header';
import '../styles/content.scss';


export function Content({movies, selectedGenre}:ContentProps) {
  // Complete aqui
  return(
    <div className="container">
      <Header selectedGenre={selectedGenre}/>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>    
  )
}