import React, { FC } from 'react';
import { urlIsAvailable } from '../helpers/urlIsAvailable';
import { FilterSearch, MovieResults } from "../types";
import camelcaseKeys from 'camelcase-keys';

const baseUrl = 'http://localhost:4000/';

export default {
  getMovies: async (offset = 0, limit = 8, filterSearch?: FilterSearch): Promise<MovieResults> => {
    let url = `${baseUrl}movies?offset=${offset}&limit=${limit}`;
    if (filterSearch) {
      const { sortBy, search, sortOrder, searchBy, filter } = filterSearch;
      if (sortBy) {
        url += `&sortBy=${sortBy}`;
        if (sortOrder) {
          url += `&sortOrder=${sortOrder}`;
        } else {
          url += `&sortOrder=desc`;
        }
      }
      if (search) {
        url += `&search=${search}`;
      }
      if (searchBy) {
        url += `&searchBy=${searchBy}`;
      }
      if (filter && filter.toString() !== 'All') {
        url += `&filter=${filter}`;
      }
    }
    const response = await fetch(`${url}`);
    if (response.ok) {
      const movies = await response.json() as MovieResults;
      const createdPromises: Promise<boolean>[] = [];
      movies.data.forEach(movie => {
        const urlIsAvailablePromise = urlIsAvailable(camelcaseKeys(movie).posterPath);
        createdPromises.push(urlIsAvailablePromise);
        urlIsAvailablePromise.then(isAvailable => {
          if (!isAvailable) {
            movie.posterPath = 'https://media.istockphoto.com/vectors/cinema-and-movie-time-vector-id640312764';
          }
        });
      })
      await Promise.all(createdPromises);
      return movies;
    }
    return {
      totalAmount: 0,
      data: []
    };
  },

}
