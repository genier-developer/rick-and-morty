import {Character} from "../types/Character.ts";
import {FC} from "react";
import {Card} from "@mui/material";


export const CharacterCard: FC<{character: Character}> = ({character}) => {
    return (
        <Card className={'character-card'}>
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
        </Card>
    );
};
