import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import waterfall from 'promise-waterfall';

import transitions from './chatTransitions'

import {
  chatAddMessage,
  chatSetOptions,
  } from '../actions/chatActions';
import HomePage from '../components/HomePage';


function getTransitionByPattern (transitions, pattern) {
  return transitions.reduce((res, t) => {
    if (t.pattern === pattern) {
      return t;
    }
  }, null);
}

function chatWithVisitor(transition, dispatch) {
  return new Promise((resolve, reject) => {
    const messages = transition.messages;
    const options = transition.options || [];
    const promises = messages.map((m, idx) => () => dispatch(chatAddMessage(messages[idx], true)));

    return waterfall(promises)
      .then(() => {
        if (!!options) {
          return dispatch(chatSetOptions(options));
        }
        resolve();
      });
  });
}


class HomePageContainer extends React.Component {
  constructor(props) {
    super();
    // handleOnChatSubmit.bind(this);
  }

  componentDidMount() {
    console.log('HOME APP MOUNT');
    const dispatch = this.props.dispatch;

    new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
      })
      .then(() => {
        return chatWithVisitor(transitions[0], dispatch);
      })
      .then(() => {
        console.log('FINISH FIRST MESSAGE SEQUENCE');
      });

  }

  handleOnChatSubmit(message) {
    const dispatch = this.props.dispatch;
    const transition = getTransitionByPattern(transitions, message);

    dispatch(chatAddMessage({author: 'Visitor', message}));
    dispatch(chatSetOptions([]));

    if (transition) {
      chatWithVisitor(transition, dispatch);
    }
    else {
      dispatch(chatAddMessage({author: 'Pavel', message: '== dead end =='}));
    }

  }

  render() {
    return (
      <HomePage
        chat={this.props.chat}
        onChatSubmit={this.handleOnChatSubmit.bind(this)}
      />
    );
  }
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
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
