import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import data from '../utils/api/movie.json'
import MovieView from './MovieView';
import MovieList from './MovieList';

const Movies = () => {
    const [movies, setMovies] = useState(data)

    return (
        <div className="gallery">
            <MovieView />
            <MovieList movies={movies} />
        </div>
    );
};

export default Movies;