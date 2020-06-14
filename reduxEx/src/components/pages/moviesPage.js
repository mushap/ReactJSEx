import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList';

class moviesPage extends Component {

    static propTypes = {
        movies: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <MoviesList movies={this.props.movies}></MoviesList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(moviesPage);