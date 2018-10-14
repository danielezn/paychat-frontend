import * as React from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../actions';

function validate(formProps:any) {
  const errors = {};

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

const form = reduxForm({
  form: 'register',
  validate
});

const renderField = (field:any) => {
    return <div>
              <input className="form-control" {...field.input}/>
              {field.touched && field.error && <div className="error">{field.error}</div>}
           </div>
};

class Register extends React.Component<any, any> {
  handleFormSubmit(formProps:any) {
    this.props.registerUser(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
    return <div/>
  }

  render() {
    const { handleSubmit } = this.props;
    // tslint:disable-next-line:jsx-no-bind
    const submitFunction = handleSubmit(this.handleFormSubmit.bind(this));
    return (
      <form onSubmit={submitFunction}>
      {this.renderAlert()}
        <div className="row">
          <div className="col-md-12">
            <label>Email</label>
            <Field name="email" className="form-control" component={renderField} type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label>Password</label>
            <Field name="password" className="form-control" component={renderField} type="password" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    );
  }
}

function mapStateToProps(state:any) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { registerUser })(form(Register));