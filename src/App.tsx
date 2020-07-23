import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Content from './pages/Content/Content';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <div className='content-area'>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}
export default App