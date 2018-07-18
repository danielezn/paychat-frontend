import * as React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent: any) {
  class Authentication extends React.Component {

    public componentWillMount() {
      const { authenticated } = this.props as any;
      if (!authenticated) {
        // tslint:disable-next-line:no-debugger
        // tslint:disable-next-line:no-string-literal
        this.props['history'].push('/login')
        // this.context.router.history.push('/login');
      }
    }

    public componentWillUpdate(nextProps: any) {
      if (!nextProps.authenticated) {
        this.context.router.push('/login');
      }
    }

    public render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state: any) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}