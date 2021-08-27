import React from 'react';
import numeral from "numeral";
import { BiChevronsDown, BiChevronsUp, BiDotsHorizontal } from "react-icons/bi";

const MovieItem = ({movie}) => {
    const {rank, movieNm, audiCnt, salesAmt, rankInten} = movie

    return (
        <tr>
            <td>{rank}</td>
            <td>{movieNm}</td>
            {/* numeral(xxx).format(0,0) */}
            <td>{numeral(audiCnt).format(0,0)} 원</td>
            <td>{numeral(salesAmt).format(0,0)} 명</td>
            <td>
                {rankInten > 0 && <BiChevronsUp color="red" />}
                {rankInten < 0 && <BiChevronsDown color="blue" />}
                {rankInten === 0 && <BiDotsHorizontal color="#333" />}
                {rankInten}
            </td>
        </tr>
    );
};

export default MovieItem;