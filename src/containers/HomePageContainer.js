import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
import { chatAddMessage } from '../actions/chatActions';
import HomePage from '../components/HomePage';

export const HomePageContainer = (props) => {
  return (
    <HomePage
      chat={props.chat}
      handleOnChatSubmit={props.handleOnChatSubmit}
    />
  );
};

HomePageContainer.propTypes = {
  // actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    chat: state.chat,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch)
    handleOnChatSubmit: (message) => dispatch(chatAddMessage(message)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
