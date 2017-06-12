import React, {Component} from 'react';
import Header from './Header';
import VendorModal from './vendor_modal';
export default class Vendors extends Component {
        render() {
                return <div>
                        <Header/>
                        <div className="container-fluid">
                                <h2>Vendors <div className="pull-right panel-btn">
                                                                        <button className="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal">New Vendor</button>
                                                                </div></h2>
                                <div className="row">
                                        <div className="col-md-4">
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
                                                                                <br/>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                        <VendorModal/>
                </div>
        }
}