import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    display: flex; width: 1300px; margin: 0 auto; flex-direction: row; flex-wrap: wrap; 
    article{
        width: 300px;border: 1px solid #dcdcdc; margin-right: 10px; padding: 5px;
        a{
            h2{font-size: 18px;margin-bottom: 10px; text-overflow:ellipsis;white-space: nowrap; overflow: hidden;}
            img{width:300px; height: 160px;}
            p{margin-top: 15px;line-height: 1.6;}
        }
        &::nth-child(4n){margin-right:0;}
    }
`

const Test6 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=90ec87866cc24b639acb78dcd5191636'
        axios.get(url)
             .then(res => {
                setData(res.data.articles)
             })
    }

    return (
        <Container>
            {
                data.map((item, index) => <article key={index}>
                    <a href={item.url} target="_blank">
                        <h2>{item.title}</h2>
                        <img src={item.urlToImage} alt={item.title} />
                        <p>{item.description}</p>
                    </a>
                </article>)
            }        
        </Container>
    );
};

export default Test6;