import * as React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent: any) {
  class Authentication extends React.Component {

    componentWillMount() {
      const { authenticated } = this.props;
      if (!authenticated) {
        this.props.history.push('/login')
        // this.context.router.history.push('/login');
      }
    }

    componentWillUpdate(nextProps: any) {
      if (!nextProps.authenticated) {
        this.context.router.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state: any) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}