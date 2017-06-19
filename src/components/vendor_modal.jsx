import React, { Component } from 'react';
class VendorModal extends Component{
    render(){
        return(
            <div>
                <div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog modal-lg">
    <div className="modal-content ">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Add Vendor</h4>
      </div>
       <form>
          <div className="modal-body">
            <div className="row clearfix">
            <div className="col-md-6">
                    <div className="form-group">
                        <label>Vendor Name</label>
                       <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                  
            </div>
             <div className="col-md-6">
                    <div className="form-group">
                        <label>Vendor Id</label>
                       <input type="text" className="form-control" placeholder="Vendor Id"/>
                    </div>
                  
            </div>
              <div className="col-md-6">
                    <div className="form-group">
                        <label>Product</label>
                       <input type="text" className="form-control" placeholder="product"/>
                    </div>
                  
            </div>
              <div className="col-md-6">
                    <div className="form-group">
                        <label>Phone</label>
                       <input type="text" className="form-control" placeholder="Phone"/>
                    </div>
                  
            </div>
             <div className="col-md-6">
                    <div className="form-group">
                        <label>Email</label>
                       <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                  
            </div>
             <div className="col-md-6">
                    <div className="form-group">
                        <label>PAN Number</label>
                       <input type="email" className="form-control" placeholder="PAN Number"/>
                    </div>   
            </div>
             <div className="col-md-6">
                    <div className="form-group">
                        <label>GST</label>
                       <input type="email" className="form-control" placeholder="GST"/>
                    </div>   
            </div>
             <div className="col-md-12">
                    <div className="form-group">
                        <label>Address</label>
                       <textarea type="textarea" className="form-control" placeholder="Address"/>
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
export default VendorModal;