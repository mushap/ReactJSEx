import { FETCHED_MOVIES, FETCHED_MOVIES_ERROR } from '../actions/moviesAction';

const initialState = {
    movies: [],
    moviesError: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case FETCHED_MOVIES_ERROR:
            return {
                ...state,
                moviesError: action.payload
            }
        default:
            return state;
    }
}