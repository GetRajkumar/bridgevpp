import axios from 'axios';
import { browserHistory} from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = "http://localhost:2500";

export function signinUser({email, password}){
    return function(dispatch){    
    //Submit email/password to the server

    axios.post(`${ROOT_URL}/signin`, {email:email, password:password})
    .then(response =>{
  // Update state to indicate user is authenticated
    dispatch({ type: AUTH_USER });
    // Save the JWT token 
    localStorage.setItem('token', response.data.token);
    // Redirect to the route '/dahsboard'

        browserHistory.push('/dashboard');
    })
    .catch(() =>{
        dispatch(authError('Bad signin Information'));
    });
  

    //if request is bad

    // show an error to the user
    }
}

export function signupUser({name, email, password, role, accesskey}){
     return function(dispatch){ 
         //Submit email/password to the server
    axios.post(`${ROOT_URL}/signup`, {name, email, password, role, accesskey})
    .then(response =>{
            //signup success message
     
    })
 .catch(() =>{
        dispatch(authError('signup data Invaild'));
    });
    

     // Redirect to the route '/dahsboard'

     }
}

export function authError(error){
        return{
            type:AUTH_ERROR,
            payload:error
        }
}

export function signoutUser(){
    localStorage.removeItem('token');
    return { type: UNAUTH_USER }

}