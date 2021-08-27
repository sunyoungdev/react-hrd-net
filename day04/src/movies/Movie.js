import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import movie from '../utils/api/movie'
import MovieList from './MovieList';

const Movie = () => {
    const [data, setData] = useState(movie)

    const onDel = (no) => {
        setData(data.filter(item => item.no !== no))
    }

    return (
        <div className="gallery">
            <MovieList data={data} onDel={onDel} />          
        </div>
    );
};

export default Movie;