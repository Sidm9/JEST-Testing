import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getMovieByNameAndPlotQuery, MovieDetails, SearchResponse } from '../../utils/types'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'MovieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://www.omdbapi.com` }),

  keepUnusedDataFor: 10000,
  endpoints: (builder) => ({

    getMovieBySearch: builder.mutation<SearchResponse, Partial<SearchResponse> | getMovieByNameAndPlotQuery>({
      query: ({ Title }: getMovieByNameAndPlotQuery) => ({
        url: `/?apikey=${process.env.REACT_APP_API_KEY}&s=${Title}`,
        method: 'POST',
        body: Title,
      }),
    }),


    getMovieDetails: builder.mutation<MovieDetails, Partial<MovieDetails>>({
      query: ({Title}: getMovieByNameAndPlotQuery) => ({
        url: `/?apikey=${process.env.REACT_APP_API_KEY}&t=${Title}`,
        method: 'POST',
        body: Title,
      }),
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieBySearchMutation , useGetMovieDetailsMutation } = api