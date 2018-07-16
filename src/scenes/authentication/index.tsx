import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <label className="control-label">Name</label>
            <div className="row">
              <div className="col-md-6">
                <input id="name" name="name" className="form-control" type="text"/>
              </div>
              <div className="col-md-6 text-right">
                <a id="register" href="#" className="btn btn-primary">
                  <span className="glyphicon glyphicon-plus"/> Register</a>
              </div>
            </div>
            <br/>
            <br/>
            <label className="control-label">Peer</label>
            <div className="row">
              <div className="col-md-6">
                <input id="peer" name="peer" className="form-control" type="text"/>
              </div>
              <div className="col-md-6 text-right">
                <a id="call" href="#" className="btn btn-success">
                  <span className="glyphicon glyphicon-play"/> Call</a>
                <a id="terminate" href="#" className="btn btn-danger">
                  <span className="glyphicon glyphicon-stop"/> Stop</a>
              </div>
            </div>
            <br/>
          </div>
          <div className="col-md-7">
            <div id="videoBig">
              <video id="videoOutput" autoPlay={true} width="640px" height="480px"/>
            </div>
            <div id="videoSmall">
              <video id="videoInput" autoPlay={true} width="240px" height="180px"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state:any) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);