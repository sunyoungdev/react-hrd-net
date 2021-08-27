import React, { useMemo } from 'react';

const getColor = (color) => {
    console.log('getColor')
    switch(color) {
        case 'red': return '빨강';
        case 'pink': return '핑크';
        case 'tomato': return '토마토';
        case 'yellow': return '노랑';
        default: return '없음'
    }
}

const getMovie = (movie) => {
    console.log('getMovie')
    switch(movie) {
        case '미나리': return '한국 가족의 이민 영화';
        case 'Nomadland': return '노매드의 삶';
        case '크루엘라': return '디즈니 크루엘라의 실사판';
        default: return '없음'
    }
}

const Test9Sub = ({color, movie}) => {

    const colorInfo = useMemo(() => getColor(color), [color])
    const movieInfo = useMemo(() => getMovie(movie), [movie])

    return (
        <div>
            <h3>내가 좋아하는 색은 {color} 이고 컬러 설명은 {colorInfo}입니다.</h3>
            <h3>내가 좋아하는 영화는 {movie} 이고 설명은 {movieInfo}입니다. </h3>
        </div>
    );
};

export default Test9Sub;