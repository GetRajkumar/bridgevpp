import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Signin from './components/Auth/signin';
import Signup from './components/Auth/signup';
import RequireAuth from './components/Auth/require_auth';
import Signout from './components/Auth/signout';
import AddBill from './components/AddBill';
import BillStatus from './components/BillStatus';
import Vendors from './components/Vendors';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { AUTH_USER} from './actions/types';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if(token) {
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
<Router history = { browserHistory }>
    <Route path="/" component={App}> 
    <IndexRoute component={welcome} />
      <Route path="/signin" component= {Signin}/>
      <Route path="/signup" component= {Signup}/>
      <Route path="/Signout" component= {Signout}/>
      <Route path="/dashboard" component= {RequireAuth(Dashboard)}/>
      <Route path="/addbill" component= {RequireAuth(AddBill)}/>
      <Route path="/billstatus" component= {RequireAuth(BillStatus)}/>
      <Route path="/vendors" component= {RequireAuth(Vendors)}/>
      }
        </Route>
</Router>
  </Provider>,
    document.getElementById('root')
);