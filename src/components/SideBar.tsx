import { Button } from './Button';
import '../styles/sidebar.scss';
import { SidebarProps } from '../@types/types';

export function SideBar({genres,selectedGenreId, handleClickButton}:SidebarProps) {
  // Complete aqui   <nav className="sidebar">
  return(
    <>
      <nav>
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}