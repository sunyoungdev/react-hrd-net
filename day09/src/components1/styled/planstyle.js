import styled from 'styled-components'

// styled component 따로 빼쓰기
// export 는 {}안에 넣어서 불러오기
export const Article = styled.article`
    width: 450px; padding: 20px; 
    border: 1px solid #dcdcdc;
    position: relative;
    cursor: pointer;
    margin-bottom: 10px;
    h3 {
        font-size: 35px; color: 'tomato';
        margin-bottom: 15px;
    }
    p {font-size: 20px;}
    .icon{
        position:absolute; right: 20px; top: 50%;
        transform: translateY(-50%);
        font-size: 40px;
    }
    &.on{background-color: rgba(100, 200, 100, 0.3); border-color: tomato;}
`

export const PlanForm = styled.form`
    margin: 15px; border: 1px solid #999; width: 450px; padding: 20px;
    div{
        margin-bottom: 15px;
        label{display:inline-block; width: 80px;}
        input[type=text] {width: 250px; height: 35px;border: 1px solid #999; padding: 0 15px;}
    }
    button{width: 120px;height: 35px; background: #000; color: #fff; border: none;}
`