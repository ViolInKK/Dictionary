import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react/';
import { WordData } from '../../models/WordData';


const API_LINK = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export const dictionaryApiSlice = createApi({
    reducerPath: 'dictionaryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_LINK,
    }),
    endpoints(builder){
        return{
            fetchDefinition: builder.query<WordData[], string>({
                query(word){
                    return `/${word}`
                }
            })
        }
    }
})

export const { useFetchDefinitionQuery } = dictionaryApiSlice