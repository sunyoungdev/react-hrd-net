import React, { useState } from 'react';
import styled from 'styled-components'

const ImageSearch = styled.form`
    text-align: center; padding: 20px 0;
    input{width: 400px; height: 45px; padding: 0 20px;margin-right: 15px;box-sizing:border-box;}
    button{width: 100px;height: 45px;}
`

const GalleryForm = ({onSearch}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(text)
    }

    return (
        <ImageSearch onSubmit={onSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button>검색</button>
        </ImageSearch>
    );
};

export default GalleryForm;