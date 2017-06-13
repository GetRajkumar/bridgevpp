<<<<<<< HEAD
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_REG, AUTH_NAME, FETCH_VENDOR} from '../actions/types';
=======
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_REG, FETCH_MESSAGE} from '../actions/types';
>>>>>>> origin/master

export default function(state = {}, action){
    switch(action.type){
          case AUTH_USER:
          return{...state, authenticated:true};

          case UNAUTH_USER:
          return{...state, authenticated:false};

           case AUTH_ERROR:
           return{...state, error: action.payload};

           case AUTH_REG:
           return{...state, success: action.payload};

<<<<<<< HEAD
            case AUTH_NAME:
           return{...state, name: action.payload};

            case FETCH_VENDOR:
           return{...state, datavendor: action.payload};
           
=======
            case FETCH_MESSAGE:
           return{...state, message: action.payload};
>>>>>>> origin/master
           
    }
    return state;
}