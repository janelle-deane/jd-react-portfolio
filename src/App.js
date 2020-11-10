import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';


export default function App() {
  return (
    <Router>
       <NavBar/>
       <Switch>
         <Route exact path="/"component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/portfolio" component={Portfolio}/>
       </Switch>
       <Footer/>
     </Router>
  );
}


