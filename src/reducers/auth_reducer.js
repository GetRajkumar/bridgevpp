import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_REG, AUTH_NAME, AUTH_VENDOR} from '../actions/types';


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


            case AUTH_NAME:
           return{...state, name: action.payload};

            case AUTH_VENDOR:
           return{...state, data: action.payload};
           
    }
    return state;
}