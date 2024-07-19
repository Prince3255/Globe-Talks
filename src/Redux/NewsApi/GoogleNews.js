import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export const NewsApi = createApi({
    reducerPath: 'NewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://google-news13.p.rapidapi.com',
        prepareHeaders: (headers) => {
            if (apiKey) {
                headers.set('x-rapidapi-key', apiKey);
            } else {
                console.error('API key is not defined!');
            }

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getLatest: builder.query({
            query: (language) => `/latest?lr=${language}`,
            
            // refetchOnFocus: true,
            // refetchOnReconnect: true
        }),
        getWorld: builder.query({
            query: (language) => `/world?lr=${language}`
        }),
        getEntertainment: builder.query({
            query: (language) => `/entertainment?lr=${language}`
        }),
        getBusiness: builder.query({
            query: (language) => `/business?lr=${language}`
        }),
        getHealth: builder.query({
            query: (language) => `/health?lr=${language}`
        }),
        getSport: builder.query({
            query: (language) => `/sport?lr=${language}`
        }),
        getScience: builder.query({
            query: (language) => `/science?lr=${language}`
        }),
        getTechnology: builder.query({
            query: (language) => `/technology?lr=${language}`
        }),
        getSearch: builder.query({
            query: ({searchTerm, language}) => `/search?keyword=${encodeURIComponent(searchTerm)}&lr=${language}`
        }),
        getLanguage: builder.query({
            query: () => '/languageRegions'
        })
    })
})

export const { useGetSearchQuery , useGetTechnologyQuery, useGetScienceQuery, useGetSportQuery, useGetHealthQuery, useGetBusinessQuery, useGetEntertainmentQuery, useGetWorldQuery, useGetLatestQuery, useGetLanguageQuery } = NewsApi