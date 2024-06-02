import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: (page=1, name='', status='') => `character/?page=${page}&name=${name}&status=${status}`,
        }),
    }),
})

export const {useGetCharactersQuery} = rickAndMortyApi