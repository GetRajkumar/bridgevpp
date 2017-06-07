import React, {Component} from 'react';
import Header from './Header';
var FontAwesome = require('react-fontawesome');
export default class BillStatus extends Component {
        render() {
                return <div>
                        <Header/>
                        <div className="container-fluid">
                                <h2>Bill Status</h2>
                                <div className="panel panel-default">
                                        <div className="panel-body">
                                                <h5>May -2017</h5>
                                                <div className="panel panel-default">
                                                        <div className="panel-heading clearfix">
                                                                <h3 className="panel-title pull-left">
                                                                        < a href="#demo" data-toggle="collapse">
                                                                                <span className="ticketId"><FontAwesome className='super-crazy-colors' name='angle-down'/>Ticket No:
                                                                                        <b>152487</b>
                                                                                </span>
                                                                        </a>
                                                                </h3>
                                                                <div className="pull-right">
                                                                        <span className="spanClr">Bills: 
                                                                                <span>
                                                                                        <b> 01</b>
                                                                                </span>
                                                                        </span>
                                                                        <span className="spanClr">Created: 
                                                                                <span>
                                                                                        <b> 12/05/2017</b>
                                                                                </span>
                                                                        </span>
                                                                        <span>
                                                                                <FontAwesome className='tickCls' name='check-circle'/></span>
                                                                </div>
                                                        </div>
                                                        <div id="demo" className="panel-collapse collapse in">
                                                                <div className="panel-body ">
                                                                        <div className="well well-sm clearfix">
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Vendor Name</div>
                                                                                        <div className="dataVendor">SaiRam Enterprises</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Bill Number</div>
                                                                                        <div className="dataVendor">OP-254875</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Bill Date</div>
                                                                                        <div className="dataVendor">25-12-2016</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Bill Amount</div>
                                                                                        <div className="dataVendor">2500</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Client Remarks</div>
                                                                                        <div className="dataVendor">None</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Attachment</div>
                                                                                        <div className="dataVendor">
                                                                                                <a href="">invoice.pdf</a>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="clearfix"></div>
                                                                                <div className="col-sm-12 buttonContainer">
                                                                                        <button className="btn btn-sm btn-success">Approve it</button>
                                                                                        <button className="btn btn-sm btn-default">Cancel</button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                 <div className="panel panel-default">
                                                        <div className="panel-heading clearfix">
                                                                <h3 className="panel-title pull-left">
                                                                        < a href="#demo1" data-toggle="collapse">
                                                                                <span className="ticketId"><FontAwesome className='super-crazy-colors' name='angle-down'/>Ticket No:
                                                                                        <b>152488</b>
                                                                                </span>
                                                                        </a>
                                                                </h3>
                                                                <div className="pull-right">
                                                                        <span className="spanClr">Bills:
                                                                                <span>
                                                                                        <b> 01</b>
                                                                                </span>
                                                                        </span>
                                                                        <span className="spanClr">Created:
                                                                                <span>
                                                                                        <b> 12/05/2017</b>
                                                                                </span>
                                                                        </span>
                                                                        <span>
                                                                                <FontAwesome className='tickCls' name='check-circle'/></span>
                                                                </div>
                                                        </div>
                                                        <div id="demo1" className="panel-collapse collapse ">
                                                                <div className="panel-body ">
                                                                        <div className="well well-sm clearfix">
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Vendor Name</div>
                                                                                        <div className="dataVendor">SaiRam Enterprises</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Bill Number</div>
                                                                                        <div className="dataVendor">OP-254875</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Bill Date</div>
                                                                                        <div className="dataVendor">25-12-2016</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Bill Amount</div>
                                                                                        <div className="dataVendor">2500</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Client Remarks</div>
                                                                                        <div className="dataVendor">None</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Attachment</div>
                                                                                        <div className="dataVendor">
                                                                                                <a href="">invoice.pdf</a>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="clearfix"></div>
                                                                                <div className="col-sm-12 buttonContainer">
                                                                                        <button className="btn btn-sm btn-success">Approve it</button>
                                                                                        <button className="btn btn-sm btn-default">Cancel</button>
                                                                                </div>
                                                                        </div>
                                                                                 <div className="well well-sm clearfix">
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Vendor Name</div>
                                                                                        <div className="dataVendor">SaiRam Enterprises</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Bill Number</div>
                                                                                        <div className="dataVendor">OP-254875</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Bill Date</div>
                                                                                        <div className="dataVendor">25-12-2016</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Bill Amount</div>
                                                                                        <div className="dataVendor">2500</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Client Remarks</div>
                                                                                        <div className="dataVendor">None</div>
                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                        <div className="block label-control">Attachment</div>
                                                                                        <div className="dataVendor">
                                                                                                <a href="">invoice.pdf</a>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="clearfix"></div>
                                                                                <div className="col-sm-12 buttonContainer">
                                                                                        <button className="btn btn-sm btn-success">Approve it</button>
                                                                                        <button className="btn btn-sm btn-default">Cancel</button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        }
}