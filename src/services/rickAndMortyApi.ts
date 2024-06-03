import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


interface CharactersResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

interface Character {
    id: number;
    name: string;
    status: string;
    image: string;
}
export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: (builder) => ({
        getCharacters: builder.query<CharactersResponse, {page?: number, name?: string, status?: string}>({
            query: ({page= 1, name='', status=''}) => `character/?page=${page}&name=${name}&status=${status}`,
        }),
    }),
})

export const {useGetCharactersQuery} = rickAndMortyApi