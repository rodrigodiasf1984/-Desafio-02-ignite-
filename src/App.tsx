import { useEffect, useState } from 'react';
import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';
import { GenreResponseProps, MovieProps } from './@types/types';

import './styles/global.scss';


import './styles/content.scss';


export function App() {


  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);



  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleClickButton={()=>{handleClickButton(selectedGenreId)}}  genres={genres} selectedGenreId={selectedGenreId}/>
   
      
    </div>
  )
}