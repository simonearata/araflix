import { apiConfig } from "../config";

export interface IMovie {
  page: number;
  results: IResultMovie[];
  total_pages: number;
  total_results: number;
}

export interface IResultMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ITv {
  page: number;
  results: IResult[];
  total_pages: number;
  total_results: number;
}

export interface IResult {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface ITrailer {
  id: number;
  results: IResultTrailer[];
}

export interface IResultTrailer {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export function fetchApi<T>(api: string): Promise<T> {
  const { dev, qlt, prod } = apiConfig?.environments;
  const url = `${prod?.apiUrl}${api}?api_key=${prod?.apiKey}`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        const result = res.json();

        if (res.status === 403) {
          reject(result);
        }

        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
