import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import Footer from './components/Footer';
import SignIn from './components/Auth/signin';
import SignUp from './components/Auth/signup';
import Dashboard from './components/Dashboard';
import AddBill from './components/AddBill';
import BillStatus from './components/BillStatus';
import Vendors from './components/Vendors';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
        <div>
            <Route exact path="/" component={SignIn} />
             <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/addbill" component={AddBill} />
            <Route path="/billstatus" component={BillStatus} />
            <Route path="/vendors" component={Vendors} />
            <Footer />
        </div>
    </Router>
      </Provider>,
    document.getElementById('root')
);