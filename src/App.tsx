import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import { GenreResponseProps, MovieProps } from './@types/types';

import './styles/global.scss';

export function App() {
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);


  function handleClickButton(id: number) {
    const chosenGenre = genres?.find(genre=>genre.id===id)

    if(chosenGenre){
      setSelectedGenreId(chosenGenre.id);     
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <SideBar handleClickButton={handleClickButton}  genres={genres} selectedGenreId={selectedGenreId}/>         
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  )
}