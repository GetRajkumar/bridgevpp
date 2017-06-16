import React, { Component } from 'react';

class VendorContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            vendorid: '',
            product: '',
            email:'',
            pannumber:'',
            phone:'',
            address:''

        }
    }
render(){
    return(

              <div className="col-md-4">

            <div className="panel panel-default">
                <div className="panel-heading">{this.props.name}</div>
                <div className="panel-body row">
                <div className="col-sm-6">
                        <div className="block label-control">Vendor Id
                        </div>
                        <div className="dataVendor">{this.props.name}</div>
                    </div>
                    <div className="col-sm-6">
                        <div className="block label-control">Product
                        </div>
                        <div className="dataVendor">{this.props.product}</div>
                    </div>
                    <div className="col-sm-6">
                        <div className="block label-control">Phone</div>
                        <div className="dataVendor">{this.props.phone}</div>
                    </div>
                    <div className="col-sm-6">
                        <div className="block label-control">Email</div>
                        <div className="dataVendor">{this.props.email}</div>
                    </div>
                     <div className="col-sm-6">
                        <div className="block label-control">PAN Number</div>
                        <div className="dataVendor">{this.props.pannumber}</div>
                    </div>
                    <div className="col-sm-12">
                        <div className="block label-control">Address</div>
                        <div className="dataVendor">{this.props.address}</div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
      
    );
}

}

export default VendorContent;
