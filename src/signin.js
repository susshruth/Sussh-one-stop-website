import React,{ useState } from 'react';
import {useForm} from "react-hook-form";
import './css/index.css';
import * as ReactBootStrap from "react-bootstrap";
// import { Tab } from '@material-ui/core';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


export default function Signin() {
    const { register, handleSubmit, errors } = useForm();
    const [myfirstuserid, setMyuserid] = useState('');
    const [myfirstpassword, setMypassword] = useState('');

    const buttontext="personal info >>"

    const handleChange1 = e => {
        setMyuserid(e.target.value);
    } ;
    const handleChange2 = e => {
        setMypassword(e.target.value);
    } ;
    const onSubmit = () => {
        console.log("your userID : " + myfirstuserid + " your password : " + myfirstpassword)
      }
    return(
        <div>
            <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary"  variant="dark">
    <ReactBootStrap.Navbar.Brand><strong>Login</strong></ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </ReactBootStrap.Navbar>
            </div>
        <form id="form2" onSubmit={handleSubmit(onSubmit)}><br/><br/><br/>
        <div id="main2"><br/><br/>
        <ReactBootStrap.Nav className="justify-content-center" activeKey="/info">
                <ReactBootStrap.Nav.Item>
                    <ReactBootStrap.Nav.Link eventKey="disabled" disabled>login</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav.Item>
                <ReactBootStrap.Nav.Item>
                    <ReactBootStrap.Nav.Link href="/info">info</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav.Item>
            </ReactBootStrap.Nav>
                <label id="Use"><strong>User ID :</strong></label>
                <input id="Useinput"name="user" placeholder="User id" value={myfirstuserid} onChange={handleChange1} ref={register({ required : true })}></input><br/>
                {errors.user && <p>This are a required field</p>}

                <label id="Use"><strong>Password :</strong></label>
                <input id="pasinput"name="pass" placeholder="Password" value={myfirstpassword} onChange={handleChange2} type="password" ref={register({ required : true, maxLength: 6 })}></input><br/>
                {errors.pass && <p>This are a required field and the max length is 6</p>}
                <br/>

                
                <button id="submitform" type="submit">submit</button><br/><br/>
                {/* <ReactBootStrap.Nav.Link  href="/info"> next page is  </ReactBootStrap.Nav.Link> */}
                {/* <button id="resetform" type="reset">reset</button>     */}
                </div><br/><br/>
        </form>
        
        </div>
    )
}


