import axios from 'axios';
import { browserHistory} from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_REG, AUTH_VENDOR} from './types';

import  jwtDecode from 'jwt-decode';

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


    // Decode the token to get user details
     const token = localStorage.getItem('token');
     const decoded = jwtDecode(token);
     localStorage.setItem('name', decoded.name);
     localStorage.setItem('role', decoded.role);

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
     if(response.data.message === '200'){
         dispatch({ type: AUTH_REG, payload: response.data.message});
     }
     else{
         console.log('200');
     }
    })
 .catch(() =>{
        dispatch(authError('signup data Invaild'));
    });
    

     // Redirect to the route '/dahsboard'

     }
}

export function FetchVendor(){
     return function(dispatch){
          axios.get(`${ROOT_URL}/Fetchvendor`,{
              headers:{authorization:localStorage.getItem('token')}
          })
          .then(response =>{
               dispatch({ type: AUTH_VENDOR, payload: response.data});
            
          }) 
           .catch(() =>{
        dispatch(authError('Fetchvendor data not coming'));
    });
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
      localStorage.removeItem('name');
      localStorage.removeItem('role');
    return { type: UNAUTH_USER }

}

