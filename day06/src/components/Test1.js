import React from 'react';

const Test1 = () => {
    return (
        <div>
            
        </div>
    );
};

export default Test1;

/*
class 에서만 생명주기
componentDidMount와 componentDidUpdate, componentWillUnmount
=========================

리액트의 class 생명주기 메서드에 친숙하다면, useEffect Hook을 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것으로 생각해도 좋습니다.
----------------------------
useEffect
- useEffect 화면에 렌더링이 완료된 후 수행
- 컴포넌트가 렌더링 될때마다 수행(리렌더링)
- 클래스의 componentDidMount와 componentDidUpdate, componentWillUnmount
- useEffect(콜백함수, [변수])

마운트란? 리액트에서 컴포넌트를 특정 영역에 끼워넣는다 라는 말
ReactDOM.render(App.js, #root) - App.js를 #root 에 끼워넣기 -> 이 과정이 마운트

useEffect의 Hook : 
- 마운트 되었을 때(처음 나타날 때)
- 업데이트 될 때(특정 props, state가 바뀔 때)
- 언마운트 될 때(사라질 때)

1. mount / update 둘 다 이뤄짐
useEffect(() => {
    실행문
})

2. mount 처음 한번 나타나서 실행할 때
useEffect(() => {
    실행문
}, [])

3. 특정 props, state 가 바뀔 때마다 update
useEffect(() => {
    실행문
}, [특정의존변수])

4. 정리(Clean-up)
메모리의 누스를 방지하기 위해 UI 컴포넌트를 제거하기 전에 수행
컴포넌트가 여러번 렌더링 된다면 다음 effect가 수행되기 전에 이전 effect를 정리함
useEffect(() => {

    return () => {
        뒷정리 내용(지울 이전 effect)
    }
},[props])

사용범위
- props 로 받은 값을 처리
- 외부 API(ajax 처리) - axios, fetch
- setInterval, setTimeout
- 외부 라이브러리

*/ 