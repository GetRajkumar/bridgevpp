import React, {Component} from 'react';
import Header from './Header';
export default class Vendors extends Component {
        render() {
                return <div>
                        <Header/>
                        <div className="container-fluid">
                                <h2>Vendors</h2>
                                <div className="row">
                                        <div className="col-md-3">
                                                <div className="panel panel-default">
                                                        <div className="panel-heading">SriRam Enterprises</div>
                                                        <div className="panel-body row">
                                                                <div className="col-sm-6">
                                                                        <div className="block label-control">Product
                                                                        </div>
                                                                        <div className="dataVendor">Water Cans</div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                        <div className="block label-control">Phone</div>
                                                                        <div className="dataVendor">9500554550</div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                        <div className="block label-control">Email</div>
                                                                        <div className="dataVendor">Admin@example.com</div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                        <div className="block label-control">Payment Type</div>
                                                                        <div className="dataVendor">Cheque</div>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                        <div className="block label-control">Address</div>
                                                                        <div className="dataVendor">First Floor, Fortune Summit IT Park, 244, Hosur Rd,
                                                                                Sector 6, HSR Layout, Bengaluru, Karnataka 560068</div>
                                                                </div>
                                                                 <div className="col-sm-12 buttonContainer">
                                                                <button className="btn btn-sm btn-info">Edit</button>
                                                                <button className="btn btn-sm btn-danger">Delete</button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>
        }
}