import {Character} from "../types/Character.ts";
import {FC} from "react";
import {Card, Typography} from "@mui/material";


export const CharacterCard: FC<{character: Character}> = ({character}) => {
    return (
        <Card className={'character-card'}>
            <img src={character.image} alt={character.name}/>
            <Typography variant={'h5'}>{character.name}</Typography>
            <Typography variant={'subtitle1'}>Status: {character.status}</Typography>
        </Card>
    );
};
