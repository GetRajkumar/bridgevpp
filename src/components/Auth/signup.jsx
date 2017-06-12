import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import '../common.css';
import * as actions from '../../actions';
import { Link } from 'react-router';
class Signup extends Component {
     handleFormSubmit({name, email, password, role, accesskey}){
        //console.log(name, email, password, role, accesskey);
         this.props.signupUser({name, email, password, role, accesskey});
     }
         renderAlert(){
        if(this.props.errorMessage){
            return(
                <div className="alert alert-danger">
                    {this.props.errorMessage}
                </div>
            );
        }
    }
    render(){
         const { handleSubmit, fields: {name, email, password, role, accesskey}} =this.props;
        return(
            <div className="bgOverLay">
                <div className="container">
    <div className="row">
        <div className="col-md-8 col-md-offset-2 loginContainer">
            <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>SignUp</strong>
                </div>
                <div className="panel-body">
                         {this.renderAlert()}
                    <form className="form-horizontal" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                         <div className="form-group">
                        <label  className="col-sm-3 control-label">
                           Name</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="inputPassword3" {...name} placeholder="Name" required=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">
                            Email</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" id="inputEmail3" {...email} placeholder="Email" required=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-sm-3 control-label">
                            Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" id="inputPassword3" {...password} placeholder="Password" required=""/>
                        </div>
                    </div>            
                     <div className="form-group">
                        <label  className="col-sm-3 control-label">
                            Role</label>
                        <div className="col-sm-9">
                          <select className="form-control" {...role}>
                             <option>Maker</option>
                            <option>Approver</option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-sm-3 control-label">
                            AccessKey</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="inputPassword3" {...accesskey} placeholder="Access Key" required=""/>
                        </div>
                    </div>
                  
                    <div className="form-group last">
                        <div className="col-sm-offset-3 col-sm-9">
                            <button type="submit" className="btn btn-success btn-sm">
                                Sign Up</button>
                                 <button type="reset" className="btn btn-default btn-sm">
                                Reset</button>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="panel-footer">
                    After Signup is done. Please goto  <Link to="/signin">Signin</Link></div>
            </div>
        </div>
    </div>
</div>
                </div>
        );
    }
}
function mapStateToProps(state){
    return { errorMessage: state.auth.error};
}
export default reduxForm({ form:'signup', fields:['name','email','password','role','accesskey' ]}, mapStateToProps, actions)(Signup);