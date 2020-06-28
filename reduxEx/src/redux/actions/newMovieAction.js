
import axios from 'axios';
export const NEW_MOVIE = "NEW_MOVIE";
export const NEW_MOVIE_ERROR = "NEW_MOVIE_ERROR";

export function onNewMovieSubmit({ title, cover }) {
    return dispatch => {
        axios.post("http://localhost:8080/api/movies", { title, cover })
            .then(result => result.data)
            // .then(data => dispatch({
            //     type: NEW_MOVIE,
            //     payload: data.movies
            // }))
            .then(result => console.log(result))
            .catch(error => dispatch({
                type: NEW_MOVIE_ERROR,
                payload: error
            }))
    }
}