import { combineReducers } from 'redux';
import movies from './moviesReducer';
import newMovie from './newMovieReducer';

export default combineReducers({
    movies,
    newMovie
});