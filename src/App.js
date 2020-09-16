import React from 'react';
// import NavBar from './NavBar';
import Covid from './covid';
import State from './covidprovince';
import Car from './car';
import Login from './login';
import './App.css';
import Logintwo from './info';
import YoutubeVideo from './youtube';
import Countries from './dropValFromJS';
import Weather from './weather';
import drop from './country-state-city-dropdown';
import Example from './drop_git';
import Book from './library';
import Covidfetch from './covidfetch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";


function App() {
  return (
    <div>
    
    <div>
           
           <ReactBootStrap.Navbar  collapseOnSelect expand="lg" bg="primary" variant="dark">
           {/* <img id="logo"src="sphoto.jpg" alt="image"/> */}
           <ReactBootStrap.Navbar.Brand href="localhost:3000"><h2>Sussh One Stop website<h6><a href="http://cabaini.com">Linked with cabaini.com</a></h6></h2></ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Navbar>

    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="/">Menu</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
      {/* <ReactBootStrap.Nav.Link href="/">Home |</ReactBootStrap.Nav.Link> */}
      <ReactBootStrap.Nav.Link href="/weather">Weather | </ReactBootStrap.Nav.Link> 
      {/* <ReactBootStrap.Nav.Link href="/player">Player |</ReactBootStrap.Nav.Link> 
      {/* <ReactBootStrap.Nav.Link href="/covid">Covid | </ReactBootStrap.Nav.Link>  */}
      <ReactBootStrap.Nav.Link href="/library">Library | </ReactBootStrap.Nav.Link>
      {/* <ReactBootStrap.Nav.Link href="/dropValFromJS">DropDown val from JS App | </ReactBootStrap.Nav.Link> */}
      {/* <ReactBootStrap.Nav.Link href="/car">Car | </ReactBootStrap.Nav.Link> */}
      <ReactBootStrap.Nav.Link href="/youtube">Youtube | </ReactBootStrap.Nav.Link>
      {/* <ReactBootStrap.Nav.Link href="http://cabaini.com">Engineering | </ReactBootStrap.Nav.Link> */}
      <ReactBootStrap.Nav.Link href="/country-state-city-dropdown">Covid dropdown | </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/payment">Payment | </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/car">Car | </ReactBootStrap.Nav.Link>


      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link eventKey={2} href="/logout">Logout</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Form inline>
        <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <ReactBootStrap.Button variant="outline-light">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
    </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>

    
    <Router>
      <div>
        {/* <NavBar/> */}
        <div>
          <Switch>
            {/* <Route path="/covid" component={Covid} exact /> */}
            <Route path="/covidprovince" component={State} exact />
            <Route path="/login" component={Login} />
            <Route path="/youtube" component={YoutubeVideo} />
            <Route path="/dropValFromJS" component={Countries} />
            <Route path="/car" component={Car} />
            <Route path="/info" component={Logintwo} />
            <Route path="/library" component={Book} />
            <Route path="/login2" component={Logintwo} />
            <Route path="/country-state-city-dropdown" component={drop} />
            <Route path="/covid" component={Covid} />
            {/* <Route path="/player" component={Playerfunc} /> */}
            <Route path="/Weather" component={Weather} />  {/*path abd component = Function name*/}
          </Switch>
        </div>
      </div>
      </Router> 
      {/* <img></img> */}
    </div>
    </div>
  );
}

export default App;