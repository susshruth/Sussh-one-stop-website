import React , { useState }from 'react';
import {useForm} from "react-hook-form";
import './covid.css';
import { Select, MenuItem } from "@material-ui/core";
import  InputLabel from '@material-ui/core/InputLabel';
import * as ReactBootStrap from "react-bootstrap";

export default function Covid() {
  let country = "India";
  var cases = "";

  const { register, handleSubmit } = useForm();
  const [mycountry, setMycountry] = useState(country);

    if(mycountry === "India"){
      cases = "2,034,456"
    }else {
      if(mycountry === "Canada"){
        cases = "100000"
      }else if(mycountry === "USA"){
        cases = "3,500,500"
      }
      else{
        cases ="Country not selected, PLEASE SELECT"
      }
    }

    const handleChange = e => {
      setMycountry(e.target.value);
    } ;

    const handleSubmit1 = e => {       
      alert( "In " + mycountry +" the case now are " + cases);    
      return document.getElementById("h3-1").textContent=  "In " + mycountry +" the case now are " + cases;
    } ;
        
       

      return (
        <div>
        <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <ReactBootStrap.Navbar.Brand href=""><strong>cases</strong></ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="/login2">back</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Navbar>
        </div>
          <form id="f1" onSubmit={handleSubmit(handleSubmit1)}><br/>
              <label id="label1">Country :  </label>
                  <Select 
                  labelId="label1" 
                  value={mycountry} 
                  id="select"
                  onChange={handleChange}
                  label="Country " 
                  ref={register({required: true})}
                  >
                    <MenuItem value={"India"}>India</MenuItem>
                    <MenuItem value={"Canada"}>Canada</MenuItem>
                    <MenuItem value={"USA"}>USA</MenuItem>
                  </Select>     
    <br/>
    <br/>

    <button type="submit" >submit</button>
            {/* <button onClick={handleChange}>reset</button> */}
            <h3 id="h3-1"></h3>
    <br/>
    <br/>
            
    
        
          </form>
    
    
       </div>
      );
    }


