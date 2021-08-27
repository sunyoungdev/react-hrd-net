import React from 'react';
import './Modal.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({find, onClose}) => {
    const {title, singer, key} = find

    return (
        <div className="Modal">
            <div className="bg" onClick={onClose}></div>
            <div className="popup">
                <h2>곡: {title}</h2>
                <div>
                    <iframe width="666" height="375" src={`https://www.youtube.com/embed/${key}`} title={title} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p>가수명: {singer}</p>
                <span><i onClick={onClose}><AiOutlineCloseCircle /></i></span>
            </div>
        </div>
    );
};

export default Modal;