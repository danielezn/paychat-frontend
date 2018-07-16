import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import actions from '../actions';
import Chat from '../components/chat';

class TalkContainer extends React.Component {
  public render() {
    return <Chat/>
  }
}

function mapStateToProps(state:any) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkContainer);