import React, { Component } from 'react';

class VendorModal extends Component{
    render(){
        return(
            <div>
                <div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Add Vendor</h4>
      </div>
      <div className="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div className="modal-footer">
            <button type="button" className="btn btn-sm btn-primary">Save</button>
        <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
                </div>
        );
    }

}
export default VendorModal;