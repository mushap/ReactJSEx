import React from 'react'
import PropTypes from 'prop-types';

const MovieList = props => {

    const emptyMessage = (<p>there is no data to listed</p>);
    const movieList = (
        <div>
            list it here!
        </div>
    )
    return (
        <div>
            {props.movies && props.movies.length > 0 ? movieList : emptyMessage}
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

MovieList.defaultProps = {
    movies: []
}

export default MovieList