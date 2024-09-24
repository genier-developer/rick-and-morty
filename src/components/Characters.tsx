import React, { useState } from 'react';
import { useGetCharactersQuery } from '../services/rickAndMortyApi';
import {CharacterCard} from './CharacterCard';
import {Pagination} from './Pagination.tsx';
import {Character} from "../types/Character.ts";

interface Filters {
    name: string;
    status: string;
}

export const Characters: React.FC<{ filters: Filters }> = ({ filters }) => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useGetCharactersQuery({ page, ...filters });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading characters</div>;

    return (
        <div>
            <div className="characters">
                {data?.results.map((character: Character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
            {
                data && <Pagination page={page} setPage={setPage} totalPages={data.info.pages} />
            }

        </div>
    );
};

