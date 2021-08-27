import React from 'react';
import ChangeColor from './components/changecolor/ChangeColor';
import Color from './components/color/Color';
import Count from './components/count/Count';
import Todos from './components/todos/Todos';

import ChangeColorProvider from './contexts/ChangeColorContext';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
import TodoProvider from './contexts/TodoContext';

const App = () => {
  return (
    <div>
      {/* 디자인 껍데기를 감싸서 값을 공급해줌 */}
      <TodoProvider>
        <Todos />
      </TodoProvider>
      <hr />

      <ColorProvider>
        <CountProvider>
          <Color />
        </CountProvider>
      </ColorProvider>
      <hr />

      <ChangeColorProvider>
        <ChangeColor />
      </ChangeColorProvider>
      <hr />

      {/* <CountProvider>
        <Count />
      </CountProvider>
      <hr /> */}
    
    </div>
  );
};

export default App;