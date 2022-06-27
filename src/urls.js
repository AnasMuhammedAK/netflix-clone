import { api_key } from "../src/Constance/Constance"

export const Originals = `/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
export const Action = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`