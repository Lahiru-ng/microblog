import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import Post from './Components/Post';
import composer from './Components/Composer'
import './App.css';
import Composer from './Components/Composer';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Composer />
        <div className="posts">
          <Post />
          <Post />
          <Post />
          <Post />          
        </div>
      </div>
    </div>
  );
}

export default App;
