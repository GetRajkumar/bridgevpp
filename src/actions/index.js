import axios from 'axios';
const ROOT_URL = "http://localhost:2500";

export function signinUser({email, password}){
    return function(dispatch){    
    //Submit email/password to the server

    axios.post(`${ROOT_URL}/signin`, {email:email, password:password})

    // Update state to indicate user is authenticated

    // Save the JWT token 

    // Redirect to the route '/dahsboard'

    //if request is bad

    // show an error to the user
    }
}