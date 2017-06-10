import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router';
class Welcome extends Component {
    render(){
        return (
            <div> 
                 <div className="bgOverLay">
                <div className="container">
                    <div className="well clearfix loginContainer">
            <h1>Welcome to the Bridge VPP Portal</h1>
            <br/>   
            <div className="col-md-2">
            <Link to="/signin" className="btn btn-primary btn-block">Signin</Link>
            </div>
            <div className="col-md-2">
            <Link to="/signup" className="btn btn-primary btn-block">Signup</Link>
            </div>
            </div>
            </div>
            </div>
                     <Footer/>
            </div>
        );
    }

}
export default Welcome;
