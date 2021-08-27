import React, { useState } from 'react';
import '../utils/css/reset.css'
import './Melon.css'
import data from '../utils/api/music'
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import Modal from './Modal';

const Melon = () => {
    const [musics, setMusics] = useState(data)
    // modal data
    const [find, setFind] = useState({})
    // 팝업
    const [isActive, setIsActive] = useState(false) 
    // youtube key

    const getDate = () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const date = now.getDate()
        const msg = `${year}. ${month}. ${date}`
        return msg
    }

    const onOpen = (id) => {
        setIsActive(true)
        // setFind(musics[id-1])
        setFind(musics.find(music => music.id === id))

    }
    const onClose = () => {
        setIsActive(false)
    }

    const onSearch = (text) => {
        // setMusics(data.filter(music => music.title.indexOf(text) !== -1))
        // 대소문자까지 구별하기
        setMusics(data.filter(music => {
            const re = new RegExp(text, 'ig')
            return music.title.match(re)
        }))
    }

    const onLike = (id) => {
        // setMusics(musics.map(music => music.id === id ? 
        //     {...music, like: music.like + 1, done: true} : music))

        setMusics(musics.map(music => music.id === id ? 
            {...music, like: music.like + 1, done:!music.done} : music))  
            
        // Todo: toggle like +-1

    }

    return (
        <div className="Melon">
            <h2>Melone {getDate()} 인기차트</h2>
            <MelonForm onSearch={onSearch} />
            <MelonList musics={musics} onLike={onLike} onOpen={onOpen} />
            {isActive && <Modal find={find} onClose={onClose} />}
        </div>
    );
};

export default Melon;