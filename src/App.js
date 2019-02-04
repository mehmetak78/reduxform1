import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"

import './App.css';
import ContactPage from "./components/ContactPage"
import AccountPage from "./components/AccountPage";
import ValidationPage from "./components/ValidationPage";
import FieldArrayPage from "./components/FieldArrayPage";
import WizardPage from "./components/WizardPage";
import MaterialUIPage from "./components/MaterialUIPage";





class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div className="container">

                    <Link to="/Contact"  className="btn-floating btn-large red" style={{padding:5}}>Contact</Link>
                    <Link to="/Account"  className="btn-floating btn-large red" style={{padding:5}}>Account</Link>
                    <Link to="/Validation"  className="btn-floating btn-large red" style={{padding:5}}>Validation</Link>
                    <Link to="/FieldArray"  className="btn-floating btn-large red" style={{padding:5}}>FieldArray</Link>
                    <Link to="/Wizard"  className="btn-floating btn-large red" style={{padding:5}}>WizardForm</Link>
                    <Link to="/MaterialUI"  className="btn-floating btn-large red" style={{padding:5}}>MaterialUIForm</Link>
                    <Switch>
                        <Route exact path="/"/>
                        <Route exact path="/Contact" component={ContactPage}/>
                        <Route exact path="/Account" component={AccountPage}/>
                        <Route exact path="/Validation" component={ValidationPage}/>
                        <Route exact path="/FieldArray" component={FieldArrayPage}/>
                        <Route exact path="/Wizard" component={WizardPage}/>
                        <Route exact path="/MaterialUI" component={MaterialUIPage}/>


                    </Switch>
                </div>
            </BrowserRouter>


        );
    }





}

export default App;
