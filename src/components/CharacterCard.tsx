import {Character} from "../types/Character.ts";


export const CharacterCard: React.FC<{character: Character}> = ({character}) => {
    return (
        <div className={'character-card'}>
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
        </div>
    );
};
