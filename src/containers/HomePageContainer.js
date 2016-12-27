import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  chatAddMessage,
  chatSetOptions,
  } from '../actions/chatActions';
import HomePage from '../components/HomePage';

const conversation = {
  chat: {
    messages: [
      {
        author: 'Pavel',
        message: 'Hi!',
      },
      {
        author: 'Pavel',
        message: 'My name is Pavel',
      },
      {
        author: 'Pavel',
        message: '.. what brought you here?',
      },
      {
        author: 'Visitor',
        message: '...',
      },
      {
        author: 'Pavel',
        message: 'What are you interested in?',
        loading: false,
      },
    ],
    options: [
      {
        title: 'Javascript/ReactJS development',
      },
      {
        title: 'Python development',
      },
      {
        title: 'What do you read?',
      },
    ],
  },
};


class HomePageContainer extends React.Component {
  componentDidMount() {
    console.log('HOME APP MOUNT');

    const dispatch = this.props.dispatch;
    // const dispatch(chatAddMessage = this.props.addPavelMessage;
    const messages = conversation.chat.messages;
    // const idx = 0;

    new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
      })
      .then(() => {
        console.log('Resolve(0)');
        return dispatch(chatAddMessage(messages[0]));
      })
      .then(() => {
        console.log('Resolve(1)');
        return dispatch(chatAddMessage(messages[1]));
      })
      .then(() => {
        console.log('Resolve(2)');
        return dispatch(chatAddMessage(messages[2]));
      })
      .then(() => {
        dispatch(chatSetOptions(conversation.chat.options));
      })

    // readMessage(messages, 0, this.props.addPavelMessage);

  }

  render() {
    return (
      <HomePage
        chat={this.props.chat}
        handleOnChatSubmit={this.props.handleOnChatSubmit}
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
    // actions: bindActionCreators(actions, dispatch)
    dispatch,
    handleOnChatSubmit: (message) => dispatch(chatAddMessage({author: 'Visitor', message})),
    addPavelMessage: (message) => {return dispatch(chatAddMessage(message))},
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
