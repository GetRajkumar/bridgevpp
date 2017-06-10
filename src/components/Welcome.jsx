import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router';
class Welcome extends Component {
    render(){
        return (
            <div> 
            <h1>Welcome to the Bridge VPP Portal</h1>
            <br/>   
            <Link to="/signin" className="btn btn-primary">Signin</Link>
            <Link to="/signup" className="btn btn-primary">Signup</Link>
                     <Footer/>
            </div>
        );
    }

}
export default Welcome;
