
import axios from 'axios';
export const FETCHED_MOVIES = "FETCHED_MOVIES";
export const FETCHED_MOVIES_ERROR = "FETCHED_MOVIES_ERROR";

export function fetchMovies() {
    return dispatch => {
        axios.get("http://localhost:8080/api/movies")
            .then(result => result.data)
            .then(data => dispatch({
                type: FETCHED_MOVIES,
                payload: data.movies
            }))
            .catch(error => dispatch({
                type: FETCHED_MOVIES_ERROR,
                payload: error
            }))
    }
}