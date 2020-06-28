import React from 'react'
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';

const MovieList = ({ movies }) => {

    const emptyMessage = (<p>there is no data to listed</p>);
    const movieList = (
        <Grid stackable columns={3}>
            {
                movies.movies.map(movie => <MovieCard key={movie._id} movie={movie} />)
            }
        </Grid>
    );

    return (
        <div>
            {movies.length === 0 ? emptyMessage : movieList}
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.shape({
        movies: PropTypes.array
    })
}

MovieList.defaultProps = {
    movies: {}
}

export default MovieList