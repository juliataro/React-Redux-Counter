// React entrypoint to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Reducer creation - Service using base URL and expected endpoints
export const pokemonApi = createApi({
     reducerPath: 'pokemonApi',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/'}),
     endpoints: (builder) => ({
          getPokemonByName: builder.query({
               query: (name) => `pokemon/${name}`,
          })
     })
})


export const { useGetPokemonByNameQuery} = pokemonApi;