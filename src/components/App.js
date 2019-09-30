import React,{Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {Main} from './Main'

import useWindowDimensions from "./Helpers";

function App() {
    const {height, width} = useWindowDimensions();
  return (
    <div className="App">
      <Main height={height} width={width}/>
    </div>
  );
}

export default App;
