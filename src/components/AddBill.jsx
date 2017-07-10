import React, { Component } from 'react';
import Header from './Header';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
export const fields = [
  'griddata[].vendorname',
  'griddata[].billnumber',
  'griddata[].billdate',
  'griddata[].amount',
  'griddata[].pdf',
  'griddata[].remarks'
]

class AddBill extends Component {
          handleFormSubmit({griddata}){
        console.log(griddata);
        // need to do something to log user in
         //this.props.addvendor({name, vendorid, product, phone, email, pannumber, gst, address});
    }
        render() {  
                 const { handleSubmit, fields: { griddata } } =this.props;      
                return <div>
   <Header/>
   <div className="container-fluid">
      <h2>Add Bill</h2>
      <div className="row">
         <div className="col-md-12">
       <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>                  
            <div className="panel panel-default">
               <div className="panel-heading clearfix">
                  Bill List
                  <div className="pull-right panel-btn">
                     <button className="btn btn-sm btn-primary">New Vendor</button>
                     <button className="btn btn-sm btn-primary"  onClick={() => {
            griddata.addField()   
          }}>Add Line</button>
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
                         {griddata.map((data, index) => 
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td>
                              <select className="form-control" {...data.vendorname}>
                                 <option>Select</option>
                                 <option>SriRam Enterprises</option>
                                 <option>Raj Water Cans</option>
                              </select>
                           </td>
                           <td><input className="form-control" type="text" placeholder="Bill Number" {...data.billnumber} /></td>
                           <td><input className="form-control" type="date" placeholder="Bill Date" {...data.billdate}/></td>
                           <td><input className="form-control" type="text" placeholder="Amount" {...data.amount} /></td>
                         {/* <td><input type="file" className="form-control fomr-control-file" accept="application/pdf" {...data.pdf}/></td>*/}
                          <td><input className="form-control" type="text" placeholder="pdf" {...data.pdf} /></td>
                           <td><input className="form-control" type="text" placeholder="Client Remarks"   {...data.remarks} /></td>
                           <td><button className="btn btn-sm btn-danger">Remove</button></td>
                        </tr>
                         )}
                     </tbody>
                  </table>

                  
                 
               </div>
            </div>
             <div className="pull-right clearfix">
                     <button type='submit' className="btn btn-primary">Save the bill</button>
                    
                  </div>
             </form>
         </div>
      </div>
   </div>
</div>
        }
}
export default reduxForm({ form:'addbill', fields}, null, actions)(AddBill);