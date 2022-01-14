import React, { FC } from 'react';
import { MovieResults } from "../types";

const baseUrl = 'http://localhost:4000/';

export default {
  getMovies: async (offset?: number, limit?: number): Promise<MovieResults> => {
    if (!offset) {
      offset = 0;
    }
    if (!limit) {
      limit = 8;
    }
    const response = await fetch(`${baseUrl}movies?offset=${offset}&limit=${limit}`);
    if (response.ok) {
      const res = await response.json();
      return res;
    }
    return {
      totalAmount: 0,
      data: []
    };
  },
}
