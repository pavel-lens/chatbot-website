import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { chatAddMessage } from '../actions/chatActions';
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
    handleOnChatSubmit: (message) => dispatch(chatAddMessage({author: 'Visitor', message})),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
