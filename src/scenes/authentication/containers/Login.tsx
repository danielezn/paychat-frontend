import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as LoginActions from '../actions';

const form = reduxForm({
  form: 'login'
});

class Login extends React.Component {
  public handleFormSubmit(formProps: any) {
    const { loginUser } = this.props as any;
    loginUser(formProps);
  }

  public renderAlert() {
    const { errorMessage } = this.props as any;
    if (errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {errorMessage}</span>
        </div>
      );
    }
    return <div />
  }

  public render() {
    const { handleSubmit } = this.props as any;
    const submitFuntion = handleSubmit(this.handleFormSubmit.bind(this));
    return (
      <div>
        <form onSubmit={submitFuntion}>
          {this.renderAlert()}
          <div>
            <label>Email</label>
            <Field name="email" className="form-control" component="input" type="text" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" className="form-control" component="input" type="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { loginUser: LoginActions.loginUser })(form(Login));