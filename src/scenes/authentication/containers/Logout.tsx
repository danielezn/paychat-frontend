import * as React from 'react';
import { connect } from 'react-redux';
import * as LoginActions from '../actions';

class Logout extends React.Component {
  public render() {
    const { logoutUser } = this.props as any;
    logoutUser();
    return <div/>
  }
}

function mapStateToProps(state: any) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { logoutUser: LoginActions.logoutUser })(Logout);