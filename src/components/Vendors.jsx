import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import VendorModal from './vendor_modal';
class Vendors extends Component {
componentWillMount() {
    
             this.props.FetchVendor();   
        }        
        render() {
         console.log(this.props.datavendor);
                return <div>
                        <Header/>
                       <div className="container-fluid">
    <h2>Vendors
        <div className="pull-right panel-btn">
            <button className="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal">New Vendor</button>
        </div>
    </h2>
    <div className="row"> 
       
            {(typeof this.props.datavendor !== 'undefined') ? this.props.datavendor.map((listitem)=>{
                return (
                <div className="col-md-4">
            <div className="panel panel-default">
                <div className="panel-heading">{listitem.name}</div>
                <div className="panel-body row">
                <div className="col-sm-6">
                        <div className="block label-control">Vendor Id
                        </div>
                        <div className="dataVendor">{listitem.vendorid}</div>
                    </div>
                    <div className="col-sm-6">
                        <div className="block label-control">Product
                        </div>
                        <div className="dataVendor">{listitem.product}</div>
                    </div>
                    <div className="col-sm-6">
                        <div className="block label-control">Phone</div>
                        <div className="dataVendor">{listitem.phone}</div>
                    </div>
                    <div className="col-sm-6">
                        <div className="block label-control">Email</div>
                        <div className="dataVendor">{listitem.email}</div>
                    </div>
                     <div className="col-sm-6">
                        <div className="block label-control">PAN Number</div>
                        <div className="dataVendor">{listitem.pannumber}</div>
                    </div>
                    <div className="col-sm-12">
                        <div className="block label-control">Address</div>
                        <div className="dataVendor">{listitem.address}</div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
                );
                
            }):null}
    </div>

</div>
<VendorModal/>
</div>
        }
}
function mapStateToProps(state){
  return {
    datavendor: state.auth.data
  }
  
 
}

export default connect(mapStateToProps, actions) (Vendors);