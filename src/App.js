import React,{ useState } from 'react';
// import NavBar from './NavBar';
// import Covid from './covid';
// import State from './covidprovince';
import Car from './car';
import Login from './login';
import './css/App.css';
import Logintwo from './info';
import YoutubeVideo from './youtube';
// import Countries from './dropValFromJS';
import Weather from './weather';
import drop from './country-state-city-dropdown';
// import Example from './drop_git';
import Book from './library';
// import Covidfetch from './covidfetch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';


function App() {
  const [show, setShow] = useState(true);
  const mystyle = {
    width: "27%",
    height: "90px",
    borderWidth: "0px",
    position: 'absolute',
    top: 134,
    right: 0,
  };
  const mystyle2 = {
    width: "20px",
    height: "20px",
  }
  return(
    <div>
      <div>   
        {/* --------------------------------Comments------------------------------*/} 
        
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <ReactBootStrap.Navbar.Brand style={{textAlign: "center"}}class="class" className="justify-content-center"><h2 href="localhost:3000"><img  href="localhost:3000" src="favicon.ico"alt="my-logo"></img>Sussh One Stop website</h2><img id="Person" src="person.png" onclick={<div><Dropdown><Dropdown.Menu><Dropdown.Item><Form><Form.Group><Form.File id="exampleFormControlFile1" label="Example file input" /></Form.Group></Form></Dropdown.Item></Dropdown.Menu></Dropdown></div>} alt="person symbol"></img></ReactBootStrap.Navbar.Brand>        
        </ReactBootStrap.Navbar>
        <ReactBootStrap.Navbar bg="dark" variant="dark" expand="lg">
          {/* something */}
          <ReactBootStrap.Navbar.Brand href="/">Menu</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav variant="pills" className="mr-auto">
              <ReactBootStrap.Nav.Link class="class" href="/weather">Weather </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link class="class" href="/library">Library </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link class="class" href="/youtube">Youtube </ReactBootStrap.Nav.Link>
              <OverlayTrigger placement="top" overlay={ <Tooltip>Linked to another website</Tooltip>}>
                <ReactBootStrap.Nav.Link class="class" href="http://cabaini.com">Engineering </ReactBootStrap.Nav.Link>
              </OverlayTrigger>
              {/* <ReactBootStrap.Nav.Link class="class" href="http://cabaini.com">Engineering </ReactBootStrap.Nav.Link> */}
              <ReactBootStrap.Nav.Link class="class" href="/country-state-city-dropdown">Covid dropdown |</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Dropdown.Divider />
              <ReactBootStrap.Button variant="dark" disabled>
              <ReactBootStrap.Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
              <span className="sr-only">Loading...</span>
              </ReactBootStrap.Button>{' '}
              <ReactBootStrap.NavDropdown title="In Progress" id="basic-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item class="class" href="/payment">Payment <ReactBootStrap.Badge variant="secondary">New</ReactBootStrap.Badge></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item class="class" href="/car">Car <ReactBootStrap.Badge variant="secondary">New</ReactBootStrap.Badge></ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link class="class" href="/login">Login</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="/logout">Logout</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Form inline>
              <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
            </ReactBootStrap.Form>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>

        
        <Router>
          <div>
            {/* <NavBar/> */}
            <div>
              <Switch>
                {/* <Route path="/covid" component={Covid} exact /> */}
                {/* <Route path="/covidprovince" component={State} exact /> */}
                <Route path="/login" component={Login} />
                <Route path="/youtube" component={YoutubeVideo} />
                {/* <Route path="/dropValFromJS" component={Countries} /> */}
                <Route path="/car" component={Car} />
                <Route path="/info" component={Logintwo} />
                <Route path="/library" component={Book} />
                <Route path="/login2" component={Logintwo} />
                <Route path="/country-state-city-dropdown" component={drop} />
                {/* <Route path="/covid" component={Covid} /> */}
                {/* <Route path="/player" component={Playerfunc} /> */}
                <Route path="/Weather" component={Weather} />  {/*path abd component = Function name*/}
              </Switch>
            </div>
          </div>
          </Router> 
        {/* <img></img> */}
      </div>
      {/* <h3 style={{textAlign: "center"}}> This is a React website developed by Susshruth Rajakumar Balaji in year 2020</h3>
      <h6 style={{textAlign: "center"}}>This website has 6 pages.</h6>
      <button href="https://www.youtube.com/channel/UCotaDTsaPPuAZv-C0_G0RlQ">youtube</button> */}
      <Toast style={mystyle} show={show} onClose={() => setShow(false)} dismissible>
        <Toast.Header dismisable>
          <img src="favicon.ico" style={mystyle2} className="rounded mr-2" alt="" />
          <strong className="mr-auto">Sussh One Stop Website</strong>
          <small>Hi message</small>
        </Toast.Header>
        <Toast.Body>Hi, welcome to Sussh One Stop Website</Toast.Body>
      </Toast>
      {/* <img src="me.ico" alt="me"></img> */}
    </div>
  );
}

export default App;