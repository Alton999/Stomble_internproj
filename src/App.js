import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Contacts from './components/contacts/contact';
import Intranet from './components/intranet/Intranet'
import {Route} from 'react-router-dom'
import "./App.css"



const App = () => {
  
  return (
    <>
      <CssBaseline/>  
       <Route exact path="/" component ={Home}/>
       <Route path="/about" component ={About}/>
       <Route path="/projects" component ={Projects}/>
       <Route path="/contact" component ={Contacts}/>
       <Route path="/intranet" component ={Intranet}/>
    </>
  );
}

export default App;
