import React, {Component} from 'react';
import '../common.css';
export default class Signup extends Component {
    render(){
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
                    <form className="form-horizontal">
                         <div className="form-group">
                        <label  className="col-sm-3 control-label">
                           Name</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="inputPassword3" placeholder="Name" required=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">
                            Email</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" required=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-sm-3 control-label">
                            Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" required=""/>
                        </div>
                    </div>
                     <div className="form-group">
                        <label  className="col-sm-3 control-label">
                            Confirm Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password" required=""/>
                        </div>
                    </div>
                     <div className="form-group">
                        <label  className="col-sm-3 control-label">
                            Role</label>
                        <div className="col-sm-9">
                          <select className="form-control">
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
                            <input type="text" className="form-control" id="inputPassword3" placeholder="Access Key" required=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-9">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/>
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group last">
                        <div className="col-sm-offset-3 col-sm-9">
                            <button type="submit" className="btn btn-success btn-sm">
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