import React from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineVideoCamera, AiOutlineCaretUp, AiOutlineCaretDown, AiOutlineEllipsis } from 'react-icons/ai';
import Numeral from "numeral";

const MelonItem = ({music, onLike, onOpen}) => {
    const {id, rank, poster, title, singer, album, like, done, state} = music

    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt={title} width="50" />
                <p>
                    <span>{title}</span>
                    {singer}                    
                </p>
            </td>
            <td>{album}</td>
            <td className="like">
                <i onClick={() => onLike(id)}>{done ? <AiFillHeart /> : <AiOutlineHeart />}</i>
                {Numeral(like).format(0,0)}
            </td>
            <td>
                <i onClick={() => onOpen(id)}><AiOutlineVideoCamera /></i>
            </td>
            <td>
                <i>
                    {state === '유지' && <AiOutlineEllipsis />}
                    {state === '상승' && <AiOutlineCaretUp color="red" />}
                    {state === '하강' && <AiOutlineCaretDown color="blue" />}
                </i>
            </td>
        </tr>
    );
};

export default MelonItem; 