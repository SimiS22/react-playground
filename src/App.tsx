import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './pages/Content/Content';

export const TestApp: React.FC = () => {
  const [text, setText] = useState('initial value');
  return (
    <>
      <div data-testid="myDiv">{text}</div>
      <button data-testid="myButton" onClick={() => setText('final value')}>Change</button>
    </>
  );
};












const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="content-area">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};
export default App;
