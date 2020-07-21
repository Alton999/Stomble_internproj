import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/';
import Projects from './components/projects/projects'
import {Route} from 'react-router-dom'
import "./App.css"



const App = () => {
  
  return (
    <>
      <CssBaseline/>  
       <Route exact path="/" component ={Home}/>
       <Route path="/projects" component ={Projects}/>
    </>
  );
}

export default App;
