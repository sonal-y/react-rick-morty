import React from 'react';

const CharacterItem = ({ character })  => {
    
        return (
            <div className="card-component__section">
                <img src={character.image} alt={character.name} />
                <div className="card-component__content">
                    <div className="card-component__header">
                        <span className="card-header">{character.name}</span><br/>
                        <span>id:<span>{character.id}</span>- {character.created}</span>
                    </div>
                    <div className="card-component__details">
                        <div className="bottom-border">
                            <span>STATUS</span>
                            <label>{character.status}</label>
                        </div>
                        <div  className="bottom-border">
                            <span>SPECIES</span>
                            <label>{character.species}</label>
                        </div>
                        <div  className="bottom-border">
                            <span>GENDER</span>
                            <label>{character.gender}</label>
                        </div>
                        <div  className="bottom-border">
                            <span>ORIGIN</span>
                            <label>{character.origin.name}</label>
                        </div>
                        <div  className="">
                            <span>LAST LOCATION</span>
                            <label>{character.location.name}</label>
                        </div>
                    </div>
                </div>
            </div> 
        );
    
}

export default CharacterItem;