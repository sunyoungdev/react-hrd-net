import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import data from '../utils/api/movie.json'
import MovieView from './MovieView';
import MovieList from './MovieList';
import Modal from './Modal';

const Movies = () => {
    const [ movies , setMovies] = useState(data)
    const [movieid, setMovieid] = useState(data[0])
    const [isActive, setIsActive] = useState(false)

    const onOver = (id) => {
        // setMovieid(movies[id - 1])
        setMovieid(movies.find(item => item.rank === id))

        // find => 조건에 일치하는 배열의 첫번째 값 반환
        // findIndex =>
    }

    const onOpen = () => {
        setIsActive(true)
    }
    const onClose = () => {
        setIsActive(false)
    }

    return (
        <div className="gallery">
             <MovieView movieid={movieid} onOpen={onOpen} />   
             <MovieList movies={movies} onOver={onOver} />  
             {
                 isActive && <Modal movieid={movieid} onClose={onClose} /> 
             }
             
        </div>
    );
};

export default Movies;