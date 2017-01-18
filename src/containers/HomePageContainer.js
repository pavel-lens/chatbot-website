import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import waterfall from 'promise-waterfall';

import chatTransitions from './chatTransitions';

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
    return res;
  }, null);
}

function chatWithVisitor(transition, dispatch) {
  return new Promise((resolve) => {
    const messages = transition.messages;
    const options = transition.options || [];
    const promises = messages.map((m, idx) => () => dispatch(chatAddMessage(messages[idx], true)));

    return waterfall(promises)
      .then(() => {
        if (options) {
          return dispatch(chatSetOptions(options));
        }
        resolve();
      });
  });
}


class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    // handleOnChatSubmit.bind(this);
  }

  componentDidMount() {
    console.log('HOME APP MOUNT');
    const dispatch = this.props.dispatch;

    new Promise((resolve) => {
        setTimeout(resolve, 1500);
      })
      .then(() => {
        return chatWithVisitor(chatTransitions[0], dispatch);
      })
      .then(() => {
        console.log('FINISH FIRST MESSAGE SEQUENCE');
      });

  }

  handleOnChatSubmit(message) {
    const dispatch = this.props.dispatch;
    const goto = message.goto ? message.goto : message.title;
    const transition = getTransitionByPattern(chatTransitions, goto);

    console.log('TRANSITION::' + goto);

    dispatch(chatAddMessage({author: 'Visitor', message: message.title}));
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
}

HomePageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  chat: PropTypes.object.isRequired,
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
