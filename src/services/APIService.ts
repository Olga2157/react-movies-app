import camelcaseKeys from 'camelcase-keys';
import { urlIsAvailable } from '../helpers/urlIsAvailable';
import { FilterSearch, MovieInfoDetails, MovieResults } from '../types';

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
            // api provided incorrect path for some posters
            movies.data.forEach(movie => {
                const urlIsAvailablePromise = urlIsAvailable(camelcaseKeys(movie).posterPath);
                createdPromises.push(urlIsAvailablePromise);
                urlIsAvailablePromise.then(isAvailable => {
                    if (!isAvailable && camelcaseKeys(movie).posterPath.startsWith('https://image.tmdb.org')) {
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

    createMovie: async (movieInfo: MovieInfoDetails): Promise<void> => {
        const requestBody = {
            'overview': movieInfo.overview,
            'title': movieInfo.title,
            'runtime': movieInfo.runtime,
            'poster_path': movieInfo.posterPath,
            'genres': movieInfo.genres,
            'release_date': movieInfo.releaseDate
        }
        const response = await fetch(`${baseUrl}movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
            throw new Error('cannot create movie');
        } else {
            return await response.json();
        }
    },

    updateMovie: async (movieInfo: MovieInfoDetails): Promise<void> => {
        const requestBody = {
            'id': movieInfo.id,
            'overview': movieInfo.overview,
            'title': movieInfo.title,
            'runtime': movieInfo.runtime,
            'poster_path': movieInfo.posterPath,
            'genres': movieInfo.genres,
            'release_date': movieInfo.releaseDate
        }
        const response = await fetch(`${baseUrl}movies`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
            throw new Error('cannot update Movie');
        }
    },

    deleteMovie: async (movieId: number): Promise<void> => {
        const response = await fetch(`${baseUrl}movies/${movieId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('cannot delete Movie');
        }
    }

}
