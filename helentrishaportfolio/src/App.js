import "./App.css";
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contactme from "./components/Contactme";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ="/">
      <Home/>
      </Route>
      <Route path="/aboutme">
      <Aboutme/>
      </Route>
      <Route path="/services">
      <Services/>
      </Route>
      <Route path="/portfolio">
      <Portfolio/>
      </Route>
      <Route path="/contactme">
      <Contactme/>
      </Route>

      <h1>this is my app component</h1>
      
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
