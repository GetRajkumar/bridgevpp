import React, { Component } from 'react';
import './common.css';
import Header from './Header';
export default class Dashboard extends Component {
        render() {
                return <div>
                        <Header/>
                        <div className="container-fluid">
                                <h2>Dashboard</h2>
                                <div className="row">
                                        <div className="col-md-6">
                                                <div className="panel panel-default">
                                                        <div className="panel-heading">New Requests</div>
                                                        <div className="panel-body">
                                                                                                              
                                                        </div>
                                                </div>


                                        </div>
                                        <div className="col-md-6">
                                                <div className="panel panel-default">
                                                        <div className="panel-heading">Invoice Approved</div>
                                                        <div className="panel-body">

                                                        </div>
                                                </div></div>
                                </div>
                        </div>
                </div>
        }
}