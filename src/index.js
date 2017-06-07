import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import AddBill from './components/AddBill';
import BillStatus from './components/BillStatus';
import Vendors from './components/Vendors';
import { BrowserRouter as Router, Route } from 'react-router-dom';
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/addbill" component={AddBill} />
            <Route path="/billstatus" component={BillStatus} />
            <Route path="/vendors" component={Vendors} />
            <Footer />
        </div>
    </Router>,
    document.getElementById('root')
);