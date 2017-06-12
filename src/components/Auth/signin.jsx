import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import '../common.css';
import * as actions from '../../actions';
class Signin extends Component {
    handleFormSubmit({email, password}){
        console.log(email,password);
        // need to do something to log user in
         this.props.signinUser({email, password});
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
        const { handleSubmit, fields: {email, password}} =this.props;
        return(
            <div className="bgOverLay">
                <div className="container">
    <div className="row">
        <div className="col-md-6 col-md-offset-3 loginContainer">
            <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Sign in</strong>
                </div>
                <div className="panel-body">
                     {this.renderAlert()}
                    <form className="form-horizontal" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">
                            Email</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" {...email}  placeholder="Email" required=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-sm-3 control-label">
                            Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" {...password}  placeholder="Password" required=""/>
                        </div>
                    </div>
                  
                    <div className="form-group last">
                        <div className="col-sm-offset-3 col-sm-9">
                            <button action="submit" className="btn btn-success btn-sm">
                                Sign in</button>
                                 <button type="reset" className="btn btn-default btn-sm">
                                Reset</button>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="panel-footer">
                    Not Registered? <a href="">Register here</a></div>
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

export default reduxForm({ form:'signin', fields:['email','password']}, mapStateToProps, actions)(Signin);