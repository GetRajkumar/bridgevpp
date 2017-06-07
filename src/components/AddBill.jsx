import React, { Component } from 'react';
import Header from './Header';
export default class AddBill extends Component {
        render() {
                return <div>
                        <Header/>
                        <div className="container-fluid">
                                <h2>Add Bill</h2>
                                <div className="row">
                                        <div className="col-md-12">
                                                <div className="panel panel-default">
                                                        <div className="panel-heading clearfix">Bill List
                                                                <div className="pull-right panel-btn">
                                                                        <button className="btn btn-sm btn-primary">New Vendor</button>
                                                                        <button className="btn btn-sm btn-primary">Add Line</button>
                                                                </div>

                                                        </div>
                                                        <div className="panel-body">
                                                                <table className="table table-striped">
                                                                        <thead>
                                                                                <tr>
                                                                                        <td>S.No</td>
                                                                                        <td>Vendor Name</td>
                                                                                        <td>Bill No</td>
                                                                                        <td>Bill Date</td>
                                                                                        <td>Bill Amount</td>
                                                                                        <td>Attachment(PDF)</td>
                                                                                        <td>Client Remarks</td>
                                                                                        <td>Actions</td>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                <tr>
                                                                                        <td>1</td>
                                                                                        <td><select className="form-control">
                                                                                                <option>Select</option>
                                                                                                <option>SriRam Enterprises</option>
                                                                                                <option>Raj Water Cans</option>
                                                                                                </select></td>
                                                                                        <td><input className="form-control" type="text" placeholder="Bill Number"/></td>
                                                                                        <td><input className="form-control" type="date" placeholder="Bill Date"/></td>
                                                                                        <td><input className="form-control" type="text" placeholder="Amount"/></td>
                                                                                        <td><input type="file" className="form-control fomr-control-file" accept="application/pdf"/></td>
                                                                                        <td><input className="form-control" type="text" placeholder="Client Remarks"/></td>
                                                                                        <td><button className="btn btn-sm btn-danger">Remove</button></td>
                                                                                </tr>
                                                                                 
                                                                        </tbody>
                                                                </table>
                                                        </div>
                                                </div>


                                        </div>
                                </div>
                        </div>
                </div>
        }
}