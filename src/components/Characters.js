import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

const Characters = ({ characters, loading }) => {
      if(loading){
          return <Spinner />
      } else {
        return (
            <div>
                {characters.map(character => (
                    <CharacterItem key={character.id} character={character} />
                ))}                
            </div>
            );
      }
    
}

export default Characters;