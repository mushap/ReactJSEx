import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList';
import { fetchMovies } from '../../redux/actions/moviesAction';

class moviesPage extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    static propTypes = {
        movies: PropTypes.object
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

const mapDispatchtoProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchtoProps)(moviesPage);