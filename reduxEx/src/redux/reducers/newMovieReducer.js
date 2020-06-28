import { NEW_MOVIE, NEW_MOVIE_ERROR } from '../actions/newMovieAction';

const initialState = {
    movies: [],
    moviesError: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_MOVIE:
            return {
                ...state,
                movies: action.payload
            }
        case NEW_MOVIE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}