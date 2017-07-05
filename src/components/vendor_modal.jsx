import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import './common.css';
import * as actions from '../actions';

class VendorModal extends Component{
     handleFormSubmit({name, vendorid, product, phone, email, pannumber, gst, address}){
        console.log(name, vendorid, product, phone, email, pannumber, gst, address);
        // need to do something to log user in
         this.props.addvendor({name, vendorid, product, phone, email, pannumber, gst, address});
    }
      renderAlert(){
        if(this.props.errorMessage){
            return(
                <div className="col-md-12">
                <div className="alert alert-danger alert-dismissable">
                            <a href="" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    {this.props.errorMessage}
                </div>
                </div>
            );
        }
    }
     renderAlert1(){
        if(this.props.client_error){
        
            return(
                 <div className="col-md-12">
                <div className="alert alert-warning alert-dismissable">
                    <a href="" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    {this.props.client_error}
                </div>
                </div>
            );
        }
    }
       renderAlert2(){
        if(this.props.data){
        
            return(
                 <div className="col-md-12">
                <div className="alert alert-success alert-dismissable">
                    <a href="" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    {this.props.data}
                </div>
                </div>
            );
        }
    }
    
    render(){
         const { handleSubmit, fields: {name, vendorid, product, phone, email, pannumber, gst, address}} =this.props;
        return(
            <div>
                <div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog modal-lg">
    <div className="modal-content ">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Add Vendor</h4>
      </div>
       <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="modal-body">
            <div className="row clearfix">
                 {this.renderAlert()}
                          {this.renderAlert1()}
                           {this.renderAlert2()}
            <div className="col-md-6">
                    <div className="form-group">
                        <label>Vendor Name</label>
                       <input type="text" className="form-control" {...name} placeholder="Name"/>
                    </div>
                  
            </div>
             <div className="col-md-6">
                    <div className="form-group">
                        <label>Vendor Id</label>
                       <input type="text" className="form-control" {...vendorid} placeholder="Vendor Id"/>
                    </div>
                  
            </div>
              <div className="col-md-6">
                    <div className="form-group">
                        <label>Product</label>
                       <input type="text" className="form-control" {...product} placeholder="product"/>
                    </div>
                  
            </div>
              <div className="col-md-6">
                    <div className="form-group">
                        <label>Phone</label>
                       <input type="number" className="form-control" {...phone} placeholder="Phone"/>
                    </div>
                  
            </div>
             <div className="col-md-6">
                    <div className="form-group">
                        <label>Email</label>
                       <input type="email" className="form-control" {...email} placeholder="Email"/>
                    </div>
                  
            </div>
             <div className="col-md-6">
                    <div className="form-group">
                        <label>PAN Number</label>
                       <input type="text" className="form-control" {...pannumber} placeholder="PAN Number"/>
                    </div>   
            </div>
             <div className="col-md-6">
                    <div className="form-group">
                        <label>GST</label>
                       <input type="text" className="form-control" {...gst} placeholder="GST"/>
                    </div>   
            </div>
             <div className="col-md-12">
                    <div className="form-group">
                        <label>Address</label>
                       <textarea type="textarea" className="form-control" {...address} placeholder="Address"/>
                    </div>
                  
            </div>
              </div>      
      </div>
      <div className="modal-footer">
         
                        
                            <button action="submit" className="btn btn-success btn-sm">
                                Save</button>
                                 <button className="btn btn-default btn-sm" data-dismiss="modal">
                                Close</button>
                   
      </div>
                    
                  
                   
                    </form>
     
    </div>

  </div>
</div>
                </div>
        );
    }

}

function mapStateToProps(state){
    if(state.auth.client_error ==='1002'){
                return{ client_error: 'Vendor details already in Use'}
    }
     if(state.auth.data ==='1000'){
                return{ data: 'Vendor successfully added on vendors bucket!!!'}
    }
    
    else{
    return { errorMessage: state.auth.error};
    }
}
export default reduxForm({ form:'addvendor', fields:['name', 'vendorid', 'product', 'phone', 'email', 'pannumber', 'gst', 'address']}, mapStateToProps, actions)(VendorModal);